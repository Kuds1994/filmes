import { Component, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { debounceTime, distinctUntilChanged, fromEvent, map, switchMap } from 'rxjs';

import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-list-page',
  templateUrl: './movie-list-page.component.html',
  styleUrls: ['./movie-list-page.component.css']
})
export class MovieListPageComponent {

  @ViewChild('search', { static: true }) search!: ElementRef;

  faStar = faStar


  constructor(private route:ActivatedRoute) {

      

    //this.products = this.productService.getProducts1();


    }  
  
  ngOnInit(): void {

  }

}
