import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { AlertsComponent } from './components/alerts/alerts.component';
import { ListProductsComponent } from './components/list-movies/list-movies.component';
import { AppRoutingModule } from './routing';
import { FooterComponent } from './shareds/footer/footer.component';
import { HeaderComponent } from './shareds/header/header.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        AlertsComponent,
        ListProductsComponent,
        HeaderComponent,
        FooterComponent
      ],
      imports: [AppRoutingModule, FontAwesomeModule],
      providers: [HttpClient, HttpHandler]
    }).compileComponents();
  });


  it('should ', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
  
    expect(app.title).toEqual('carrinho_compras');
  });

});
