import { Component } from '@angular/core';
import { User } from '../modle/user';
import { FormsModule, NgForm } from '@angular/forms';

import { CommonModule } from '@angular/common'; 
import { UserServiceService } from '../services/user-service.service';
import { UserRegistration } from '../modle/user-registration';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  userData:UserRegistration = {

    fname: '',
    lname: '',
    gender: '',
    email: '',
    dob: new Date(),
    password: '',   
  }

  constructor(private userServer:UserServiceService){

  }

  onRegister(registerForm:NgForm){

    this.userServer.registerNewUser(this.userData)
    .then((res)=>{     
      if(res.status==201)
      {
        alert("user registered")
      }
    })
    .catch((err)=>{
      console.log(err);
      
    })

    console.log(this.userData);
    
  }
}
