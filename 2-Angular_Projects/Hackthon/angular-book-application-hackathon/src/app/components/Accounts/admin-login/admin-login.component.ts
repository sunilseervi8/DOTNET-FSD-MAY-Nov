import { Component } from '@angular/core';
import { UserService } from '../../../service/user.service';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AdminService } from '../../../service/admin.service';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,FormsModule],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {
  constructor(private adminService: AdminService, private router:Router) { }
  loginForm = new FormGroup({
   email: new FormControl('', [Validators.required, Validators.minLength(3)]),
   password: new FormControl('', [Validators.required, Validators.minLength(3)]),
 });

onSubmit() {
 if (this.loginForm.valid) {
 this.adminService.validateAdmin(this.loginForm.value).subscribe((data) => {
   alert("login successfull");
   localStorage.setItem('Admin',data.value)
   this.router.navigate(['adminDashboard']);
   this.loginForm.reset();
      
 })

} else {
 alert('invalid credentials');
}
}}
