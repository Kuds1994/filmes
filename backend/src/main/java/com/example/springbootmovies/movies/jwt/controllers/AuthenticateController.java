package com.example.springbootmovies.movies.jwt.controllers;

import com.example.springbootmovies.movies.jwt.models.AuthenticationRequest;
import com.example.springbootmovies.movies.jwt.services.ApplicationUserDetailsService;
import com.example.springbootmovies.movies.jwt.util.JwtUtil;
import com.example.springbootmovies.movies.response.Response;
import com.example.springbootmovies.movies.user.data.UserDto;
import com.example.springbootmovies.movies.user.entity.UserEntity;
import com.example.springbootmovies.movies.user.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.security.NoSuchAlgorithmException;

@RestController
@AllArgsConstructor
class AuthenticateController {

  private final AuthenticationManager authenticationManager;
  private final UserService userService;

  private final JwtUtil jwtTokenUtil;
  private final ApplicationUserDetailsService userDetailsService;

  @PostMapping(value = "/authenticate")
  public ResponseEntity<Object> authenticate(@RequestBody AuthenticationRequest req) {
    UserEntity user;

    try {
      user = userDetailsService.authenticate(req.getEmail(), req.getPassword());
    } catch (Exception e) {
      return Response.generateResponse("Email or password is wrong", HttpStatus.UNAUTHORIZED, null);
      //throw new Exception("Incorrect username or password", e);
    }

    var userDetails = userDetailsService.loadUserByUsername(user.getEmail());

    var jwt = jwtTokenUtil.generateToken(userDetails);

    return Response.generateResponse("", HttpStatus.OK, jwt);
  }

  @PostMapping("/register")
  @ResponseStatus(HttpStatus.CREATED)
  public UserDto postUser(@Valid @RequestBody UserDto userDto)
          throws NoSuchAlgorithmException {
    return userService.createUser(userDto, userDto.getPassword());
  }
}
