package com.example.springbootmovies.movies.jwt.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class  AuthenticationRequest implements Serializable {

  private String email;
  private String password;
}