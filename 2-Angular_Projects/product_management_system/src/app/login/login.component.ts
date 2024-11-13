import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import{ FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  userName:string=""
  password:string=""
  onSubmit(){
    // console.log("submit")
    console.log(this.userName)
    console.log(this.password)
    this.userName="suc"
    this.password=""
   }
}
