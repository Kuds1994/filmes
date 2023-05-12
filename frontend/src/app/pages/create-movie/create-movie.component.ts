import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MovieService } from 'src/app/core/services/movies/movie.service';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css']
})
export class CreateMovieComponent {

  formulario: FormGroup = this.formBuilder.group({
    title: ['', Validators.required],
    description: ['', [Validators.required]],
    author: ['', [Validators.required]],
    file: ['', Validators.required]
  })

  file = ""
  botao = "Cadastrar"
  error = ""


  onFileSelected(event: any) {
    this.file = event.target.files[0];
  }

  saveMovie() {

    this.error = ""

    if(!this.formulario.valid){
      this.formulario.markAllAsTouched()
      return;
    }

    this.botao = "Salvando..."

    const formData = new FormData();

    let title = this.formulario.controls['title'].value
    let description = this.formulario.controls['description'].value
    let author = this.formulario.controls['author'].value

    formData.append("title", title)
    formData.append("description", description)
    formData.append("image", this.file)
    formData.append("author", author)

    this.movieService.saveMovie(formData).subscribe({

      next: (n) => {

        this.botao = "Cadastrar"

      },

      error: (e) => {

        this.botao = "Cadastrar"
        this.error = "Erro ao salvar filme"
        this.formulario.controls['title'].setValue('')
        this.formulario.controls['description'].setValue('')
        this.formulario.controls['author'].setValue('')
        this.file = ""

      },

      complete: () => {

        
        
      }


    })

  }

  constructor(private formBuilder: FormBuilder, private movieService: MovieService){}
}
