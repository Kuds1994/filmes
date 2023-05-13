import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router  } from '@angular/router';
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
    private movieService: MovieService,
    private router: Router){

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

  excluirFilme(id: string): void {
  
    if(confirm("Deseja excluir o filme " + this.movie.title + "?")){

      this.movieService.deleteMovice(id).subscribe({

        next: (v) => {

          this.router.navigate(['/'])

        },

        error: (err) => {

          alert('Falha ao excluir filme')

        }

      })

    }
  
  }

  

}
