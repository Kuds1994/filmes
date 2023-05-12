import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { filter, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiURL = "http://localhost:8080/api/v1/"; //YOUR API URL
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
      })
  }

  constructor(private httpClient: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]> (this.apiURL + 'users/').pipe(catchError(this.errorHandler));
  }

  getUser(id: string): Observable<User> {
    return this.httpClient.get<User>(`${this.apiURL}/users/${id}`).pipe(catchError(this.errorHandler));
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
