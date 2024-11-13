import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,  
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  // encapsulation:ViewEncapsulation.None
})
export class AppComponent {
  title = 'e-Commerce';
}
