import { Component } from '@angular/core';
import { CommonModule, NgStyle } from '@angular/common';
// import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {
userName=""
password=""
isSucces=false;


signUp(loginData:any){
   console.log (loginData.value)

  if(loginData.valid){// this going to validate only if the requireed is added in the html
    this.isSucces=true;
    console.log("success");
    //if success the usename set to null
    this.userName=""
    this.password=""
   }
   else{
    console.log("failed");
    this.isSucces=false
   }
  
}


// Demonstraion of the NgStyleth
} 
