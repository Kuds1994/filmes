package com.example.springbootmovies.movies;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class MoviesApplication {

	public static void main(String[] args) {

		System.setProperty("aws.region", "us-east-2");
		SpringApplication.run(MoviesApplication.class, args);
	}

}
