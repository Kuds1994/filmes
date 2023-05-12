import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { debounceTime, distinctUntilChanged, fromEvent, map, switchMap } from 'rxjs';
import { Movie } from 'src/app/core/models/movie';

import { faStar } from '@fortawesome/free-solid-svg-icons';
import { MovieService } from 'src/app/core/services/movies/movie.service';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css']
})
export class ListMoviesComponent implements OnInit {

  movies: Movie[] = [];
  @ViewChild('search', { static: true }) search!: ElementRef;

  faStar = faStar

  constructor(private moviesService: MovieService) { }
  
  
  ngOnInit(): void {

    //this.products = this.productService.getProducts1();
    this.moviesService.getMovies().subscribe({
      next: (response) =>{

        this.movies = response

      }
    })

  }


  
}
