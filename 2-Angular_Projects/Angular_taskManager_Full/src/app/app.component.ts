import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from './MyComponents/main/main.component';
import { HeaderComponent } from './MyComponents/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MainComponent
  ,HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular_taskManager_Full';
}
