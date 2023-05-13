import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { HomeComponent } from './pages/home/home.component';
import { MovieDetailsComponent } from './components/movie-details/movies-details.component';
import { NotFoundComponent } from './shareds/not-found/not-found.component';
import { CreateMovieComponent } from './pages/create-movie/create-movie.component';
import { UpdateMovieComponent } from './pages/update-movie/update-movie.component';

const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'create-movie', component: CreateMovieComponent},
  {path: 'movie/:id', component: MovieDetailsComponent},
  {path: 'movie-update/:id', component: UpdateMovieComponent},
  {path: '**', component: NotFoundComponent}
  
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }