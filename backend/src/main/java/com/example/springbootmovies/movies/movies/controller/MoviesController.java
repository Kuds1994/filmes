package com.example.springbootmovies.movies.movies.controller;

import com.example.springbootmovies.movies.movies.service.MovieService;
import com.example.springbootmovies.movies.movies.data.MoviesDto;
import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import java.security.NoSuchAlgorithmException;
import java.util.UUID;

@Log4j2
@AllArgsConstructor
@RestController
@RequestMapping("/api/v1/movies")
public class MoviesController {

  private final MovieService movieService;

  @GetMapping()
  public Iterable<MoviesDto> getMovies() {
    return movieService.findAllMovies();
  }

  @GetMapping("{id}")
  public MoviesDto getMovieById(@PathVariable("id") UUID id) {
    return movieService.findMovieById(id);
  }

  @DeleteMapping("{id}")
  @ResponseStatus(HttpStatus.NO_CONTENT)
  public void deleteMovieById(@PathVariable("id") UUID id) {
    movieService.removeUserById(id);
  }

  @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
  @ResponseStatus(HttpStatus.CREATED)
  public MoviesDto postMovie(@RequestParam("title") String title, @RequestParam("description") String description, @RequestParam("author") String author, @RequestParam("image") MultipartFile image)
    throws NoSuchAlgorithmException {

    MoviesDto movieDto = new MoviesDto();
    movieDto.setTitle(title);
    movieDto.setDescription(description);
    movieDto.setAuthor(author);

    return movieService.createMovie(movieDto, image);
  }

  @PutMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE, path = "{id}")
  @ResponseStatus(HttpStatus.OK)
  public MoviesDto putMovie(@PathVariable("id") UUID id, @RequestParam("title") String title, @RequestParam("description") String description, @RequestParam("author") String author, @RequestParam("image") MultipartFile image)
          throws NoSuchAlgorithmException {

    MoviesDto movieDto = new MoviesDto();
    movieDto.setTitle(title);
    movieDto.setDescription(description);
    movieDto.setAuthor(author);

    return movieService.updateMovie(id, movieDto, image);
  }

}
