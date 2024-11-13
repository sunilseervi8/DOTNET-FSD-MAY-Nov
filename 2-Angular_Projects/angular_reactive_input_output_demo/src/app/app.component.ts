import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RegistrationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title:string="Registration Form"
  fname:string="Enter your first name"
  lname:string="Enter your last name"
  email:string="Example@gmail.com"
  password:string ="Enter the Password"
 
  onRegister(){
    alert("Registration successfull!")
  }
}
