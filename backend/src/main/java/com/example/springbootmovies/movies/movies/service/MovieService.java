package com.example.springbootmovies.movies.movies.service;

import com.example.springbootmovies.movies.exception.NotFoundException;
import com.example.springbootmovies.movies.movies.data.MoviesDto;
import com.example.springbootmovies.movies.movies.entity.MoviesEntity;
import com.example.springbootmovies.movies.movies.repository.MoviesRepository;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.security.NoSuchAlgorithmException;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@AllArgsConstructor
@Service
public class MovieService {

  private final MoviesRepository repo;
  private final ModelMapper mapper;
  private final FilesStorageService filesStorageService;

  private final String link = "https://BUCKET.s3.REGION.amazonaws.com/";

  public MoviesEntity searchByTitle(String title) {
    return repo.findByTitle(title);
  }

  public List<MoviesDto> findAllMovies() {
    var moviesEntityList = new ArrayList<>(repo.findAll());

    return moviesEntityList
      .stream()
      .map(this::convertToDto)
      .collect(Collectors.toList());
  }

  public MoviesDto findMovieById(final UUID id) {
    var movie = repo
      .findById(id)
      .orElseThrow(
        () -> new NotFoundException("Movie by id " + id + " was not found")
      );

    return convertToDto(movie);
  }

  public MoviesDto createMovie(MoviesDto moviesDto, MultipartFile multipartFile)
    throws NoSuchAlgorithmException {
    var movie = convertToEntity(moviesDto);

    if (moviesDto.getTitle().isBlank()) throw new IllegalArgumentException("Title is required");

    String name = filesStorageService.saveImage(multipartFile);

    if(name.isBlank()) throw new NoSuchAlgorithmException();

    movie.setImagePath(name);

    repo.save(movie);

    return convertToDto(movie);
  }

  public void updateMovie(UUID id, MoviesDto movieDto)
    throws NoSuchAlgorithmException {
    var movie = findOrThrow(id);
    var movieParam = convertToEntity(movieDto);

    movie.setDescription(movieParam.getDescription());
    movie.setImagePath(movieParam.getImagePath());

    repo.save(movieParam);
  }

  public void removeUserById(UUID id) {
    findOrThrow(id);
    repo.deleteById(id);
  }



  private MoviesEntity findOrThrow(final UUID id) {
    return repo
      .findById(id)
      .orElseThrow(
        () -> new NotFoundException("User by id " + id + " was not found")
      );
  }

  private MoviesDto convertToDto(MoviesEntity entity) {

    entity.setImagePath(link.replaceAll("BUCKET", "projeto-eduardo").replaceAll("REGION", "us-east-2") + entity.getImagePath());
    return mapper.map(entity, MoviesDto.class);

  }

  private MoviesEntity convertToEntity(MoviesDto dto) {
    return mapper.map(dto, MoviesEntity.class);
  }
}
