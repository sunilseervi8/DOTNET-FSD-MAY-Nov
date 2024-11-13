import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from '../hero/hero.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterOutlet,HeroComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
