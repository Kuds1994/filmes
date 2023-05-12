package com.example.springbootmovies.movies.movies.data;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MoviesDto {

  private UUID id;

  private String title;
  private String description;
  private String imagePath;
  private String author;
}
