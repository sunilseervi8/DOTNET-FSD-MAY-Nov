import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './card/card.component';

import {  FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CardComponent,CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

   search = ""
   dynamicUrl = ""

  onSubmit(){
    this.dynamicUrl = "/card/"+this.search;
    console.log(this.dynamicUrl)
  }
 


}
