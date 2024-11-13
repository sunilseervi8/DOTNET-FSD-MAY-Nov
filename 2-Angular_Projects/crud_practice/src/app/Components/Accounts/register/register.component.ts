import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../../Services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
    fullName: string = '';
    email: string = '';
    password: string = '';
    confirmPassword: string = '';
 constructor(private userSevice: UserService, private route:Router) {}


  onSubmit(registerForm: any) {
   if(registerForm.valid) {
    console.log(registerForm.value);
    this.userSevice.addUser(registerForm.value).subscribe((data) => {
      console.log(data);
      this.route.navigate(['/login']);

    }
    )
   }
  }
}
