import { Component } from '@angular/core';
import { User } from '../../model/user';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserRegistrationService } from '../../services/user-registration.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
      ReactiveFormsModule,
      CommonModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
    title1="Must contain at least one number, one uppercase and lowercase letter, one special character, and at least 8 or more characters" 

  userDetails:User={
    fname:"",
    lname:"",
    email:"",
    password:"",
    conPassword:""
    
  }
  loginForm!:FormGroup
ngOnInit(): void {
  this.loginForm=new FormGroup({
    fname:new FormControl('',[Validators.required,Validators.minLength(2)]),
    lname:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.email, Validators.required]),
    password:new FormControl('',[Validators.minLength(6),Validators.required]),
    conPassword:new FormControl('',[Validators.minLength(6),Validators.required]),
})}

  constructor(private userDataService:UserRegistrationService){}

  
  validateData(){
     if(this.loginForm.valid){
      console.log("Success")
      if(this.loginForm.value.password===this.loginForm.value.conPassword){
      this.userDetails=this.loginForm.value
      this.loginForm.reset()
      this.userDataService.register(this.userDetails).subscribe(data=>console.log(data))
      }
      else{
        alert("Password and confirm password should be same")
      }
      }
     else{
      console.log("failed")
     }
  }
  

}
