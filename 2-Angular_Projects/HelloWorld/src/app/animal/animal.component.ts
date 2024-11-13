// import { Component } from '@angular/core';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCard, MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-animal',
  standalone: true,
  imports: [
    MatButtonModule,
    MatCardModule,
    MatCard,
    MatGridListModule
  ],
  templateUrl: './animal.component.html',
  styleUrl: './animal.component.css'
})
export class AnimalComponent {
   
}
