package com.example.springbootmovies.movies.movies.repository;

import com.example.springbootmovies.movies.movies.entity.MoviesEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface MoviesRepository extends JpaRepository<MoviesEntity, UUID> {

  MoviesEntity findByTitle(String title);
}
