import { Component, OnInit } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';
import { Movie } from 'src/app/core/models/movie';
import { MovieService } from 'src/app/core/services/movies/movie.service';

import { faStar, faPlay } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movie: Movie = {
    id: '',
    title: '',
    description: '',
    imagePath: '',
    author: ''
  }

  faPlay = faPlay

  constructor(
    private route: ActivatedRoute, 
    private movieService: MovieService){

    const id = this.route.snapshot.paramMap.get('id')!
    this.movieService.getMovie(id).subscribe({
      
      next: (response) =>{

        this.movie = response

      },
      error: (error) =>{

        console.log(error)
        
      }

    })  
      
  }

  ngOnInit(): void {

    
  }

}
