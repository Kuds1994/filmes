import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import { Movie } from 'src/app/core/models/movie';
import { MovieService } from 'src/app/core/services/movies/movie.service';

@Component({
  selector: 'app-update-movie',
  templateUrl: './update-movie.component.html',
  styleUrls: ['./update-movie.component.css']
})
export class UpdateMovieComponent {

  formulario: FormGroup = this.formBuilder.group({
    title: ['', Validators.required],
    description: ['', [Validators.required]],
    author: ['', [Validators.required]],
    file: ['', Validators.required]
  })

  file = ""
  botao = "Atualizar"
  error = ""

  movie!: Movie; 


  onFileSelected(event: any) {
    this.file = event.target.files[0];
  }

  saveMovie() {

    this.error = ""

    if(!this.formulario.valid){
      this.formulario.markAllAsTouched()
      return;
    }

    this.botao = "Atualizando..."

    const formData = new FormData();

    let title = this.formulario.controls['title'].value
    let description = this.formulario.controls['description'].value
    let author = this.formulario.controls['author'].value

    formData.append("title", title)
    formData.append("description", description)
    formData.append("image", this.file)
    formData.append("author", author)

    this.movieService.updateMovie(formData, this.movie.id).subscribe({

      next: (n) => {

        this.botao = "Atualizar"
        this.error = "Atualizado com sucesso!"

      },

      error: (e) => {

        this.botao = "Atualizar"
        this.error = "Erro ao atualizar o filme"
        this.formulario.controls['title'].setValue('')
        this.formulario.controls['description'].setValue('')
        this.formulario.controls['author'].setValue('')
        this.file = ""

      },

      complete: () => {

        
        
      }


    })

  }

  constructor(private formBuilder: FormBuilder, private movieService: MovieService, private route: ActivatedRoute, private router: Router){

    const id = this.route.snapshot.paramMap.get('id')!
    this.movieService.getMovie(id).subscribe({
      
      next: (response) =>{

        this.movie = response

        this.formulario.controls['title'].setValue(this.movie.title)
        this.formulario.controls['description'].setValue(this.movie.description)
        this.formulario.controls['author'].setValue(this.movie.author)

      },
      error: (error) =>{

        this.router.navigate(['/'])
                
      }

    }) 

  }
}
