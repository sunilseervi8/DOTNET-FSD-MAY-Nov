import { Component } from '@angular/core';
import { UserDetails } from '../../model/user-details';
import {FormsModule, NgForm } from '@angular/forms'


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  userData: UserDetails= {
    fname: "",
    lname:"",
    email:"",
    password:""
  } 

}import { CommonModule } from '@angular/common';

