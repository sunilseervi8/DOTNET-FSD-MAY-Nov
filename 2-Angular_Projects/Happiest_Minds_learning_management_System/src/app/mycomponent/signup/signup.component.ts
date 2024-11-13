import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CandidateService } from '../../service/candidate.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule,CommonModule,FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
 signupForm:any;
  ngOnInit() {
     this.signupForm=new FormGroup({
      email:new FormControl('',[Validators.email, Validators.required]),
      password:new FormControl('',[Validators.required]),
      confirmPassword:new FormControl('', [Validators.required]),
    })
  }    
  constructor(private candidate: CandidateService,private router:Router){

   }
    onSubmit(){
      // console.log(this.signupForm.value)
      if(this.signupForm.valid){
        console.log("success",this.signupForm.value)
        this.candidate.signup(this.signupForm.value).subscribe((data)=>{console.log(data)
          localStorage.setItem('token',JSON.stringify(this.signupForm.value))
          this.router.navigate(['/login'])
          alert("Signup successfully")
        },(err:any)=>{
          console.log(err)
          alert("Signup failed")
        })
       
        // this.signupForm.reset()
    }
      else{
        console.log("failed")
        alert("Signup failed")
      }
    
    }
  
}
