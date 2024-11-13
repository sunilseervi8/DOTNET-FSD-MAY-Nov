import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CandidateService } from '../../service/candidate.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule,CommonModule,RouterLink],
  providers: [FormBuilder],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  loginForm: any;

  constructor(private formbuilder: FormBuilder, private userServer: CandidateService, private router:Router) {

  }

  ngOnInit() {
  this.loginForm = this.formbuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })
}

onSubmit(){
  if(this.loginForm.valid){
    console.log("success",this.loginForm.value)
    this.userServer.login(this.loginForm.value).subscribe((data)=>{console.log(data)
      if(data.length==1)
      localStorage.setItem('token',JSON.stringify(this.loginForm.value))
      this.router.navigate(['candidate'])
    },(err:any)=>{
      console.log(err)
    })
  }
  else{
    console.log("failed")
  }
}


}
