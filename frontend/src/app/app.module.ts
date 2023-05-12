import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ListMoviesComponent } from './components/list-movies/list-movies.component';
import { AppRoutingModule } from './routing';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './shareds/not-found/not-found.component';
import { HeaderComponent } from './shareds/header/header.component';
import { MovieDetailsComponent } from './components/movie-details/movies-details.component';
import { SwiperModule } from "swiper/angular";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { MovieListPageComponent } from './pages/movie-list-page/movie-list-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateMovieComponent } from './pages/create-movie/create-movie.component';


@NgModule({
  declarations: [
    AppComponent,
    ListMoviesComponent,
    HomeComponent,
    NotFoundComponent,
    HeaderComponent,
    MovieDetailsComponent,
    MovieListPageComponent,
    CreateMovieComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    AppRoutingModule,    
    SwiperModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
