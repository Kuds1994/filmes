import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Movie } from '../../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiURL = "https://shrouded-brook-98591.herokuapp.com/api/v1/"; //YOUR API URL

  constructor(private httpClient: HttpClient) {}

  saveMovie(movie: FormData): Observable<Movie> {
    return this.httpClient.post<Movie>(this.apiURL + 'movies', movie)
  }

  updateMovie(movie: FormData, id: string): Observable<Movie> {
    return this.httpClient.put<Movie>(`${this.apiURL}movies/${id}`, movie)
  }

  getMovie(id: string): Observable<Movie> {
    return this.httpClient.get<Movie>(`${this.apiURL}movies/${id}`)
  }

  getMovies(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(`${this.apiURL}movies/`);
  }

  deleteMovice(id: string): Observable<Movie> {
    return this.httpClient.delete<Movie>(`${this.apiURL}movies/${id}`);
  }

  errorHandler(error: {
    error: {
        message: string;
    };
    status: any;
    message: any;
  }) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
        errorMessage = error.error.message;
    } else {
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }

}
