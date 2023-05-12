package com.example.springbootmovies.movies.movies.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.UUID;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class MoviesEntity {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO, generator = "UUID")
  @Column(nullable = false, updatable = false)
  private UUID id;

  private String title;

  @Column(length=10485760)
  private String description;
  private String imagePath;
  private String author;



}
