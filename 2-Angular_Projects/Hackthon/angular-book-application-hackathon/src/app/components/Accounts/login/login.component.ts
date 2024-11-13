import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../../service/user.service';
 

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  constructor(private userService: UserService, private router:Router) { }
     loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.minLength(3)]),
      password: new FormControl('', [Validators.required, Validators.minLength(3)]),
    });
  
  onSubmit() {
    if (this.loginForm.valid) {
    this.userService.validateUser(this.loginForm.value).subscribe((data) => {
      alert("login successfull");
      localStorage.setItem('token',data.value)
      this.router.navigate(['/userDashboard']);
      this.loginForm.reset();
         
    })

  } else {
    alert('invalid credentials');
  }
}}
