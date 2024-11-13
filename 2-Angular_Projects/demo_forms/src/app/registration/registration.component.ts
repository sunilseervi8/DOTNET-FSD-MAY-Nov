import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms'

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {

  
  loginForm = new FormGroup({
     username:new FormControl('',[Validators.minLength(5), Validators.required]),
     password:new FormControl(''),
     email:new FormControl('',[Validators.email, Validators.required])
  });


  validate(){
    console.log(this.loginForm.value)
    if(this.loginForm.valid){
     console.log("success")
    }
    else{
      console.log("failed")
    }
  } 
 
}
