import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { MainComponent } from '../main/main.component';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterOutlet,
    NavComponent,
    MainComponent,
    
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
