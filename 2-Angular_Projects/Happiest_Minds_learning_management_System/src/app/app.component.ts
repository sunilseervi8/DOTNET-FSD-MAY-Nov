import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from './mycomponent/main/main.component';
import { HeaderComponent } from './mycomponent/header/header.component';
import { HeroComponent } from './mycomponent/hero/hero.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MainComponent,HeaderComponent,HeroComponent,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Happiest_Minds_learning_management_System';
}
