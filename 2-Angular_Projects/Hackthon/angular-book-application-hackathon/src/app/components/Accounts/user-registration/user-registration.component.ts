import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'app-user-registration',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterLink
  ],
  templateUrl: './user-registration.component.html',
  styleUrl: './user-registration.component.css',
})
export class UserRegistrationComponent {
  
  signupForm !: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder,private userService:UserService, private route:Router) { }

  ngOnInit(): void {
    this.createSignupForm();
  }

  createSignupForm() {
    this.signupForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      employeeId: ['', [Validators.required, Validators.pattern('^[A-Za-z0-9]+$')]],  // Alphanumeric ID
      email: ['', [Validators.required, Validators.email]],  // Validate email
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern('(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}')  // At least one uppercase, one lowercase, and one number
      ]],
      dob: ['', Validators.required],  // Date of birth required
      location: ['', Validators.required],  // Location required
      designation: ['', Validators.required]  // Designation required
    });
  }

  get f() { return this.signupForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.signupForm.invalid) {
      return;
    }


    if(this.signupForm.valid){
      this.userService.addUser(this.signupForm.value).subscribe(
        res => {
          console.log(res);
            alert("user added successfully");
            this.route.navigateByUrl('login');

        },
        err => {
          console.log(err);
        }
      )
    }
    
  }
  get firstName() { return this.signupForm.get('firstName'); }
  get lastName() { return this.signupForm.get('lastName'); }
  get employeeId() { return this.signupForm.get('employeeId'); }
  get email() { return this.signupForm.get('email'); }
  get password() { return this.signupForm.get('password'); }
  get dob() { return this.signupForm.get('dob'); }
  get location() { return this.signupForm.get('location'); }
  get designation() { return this.signupForm.get('designation'); }
 
}
