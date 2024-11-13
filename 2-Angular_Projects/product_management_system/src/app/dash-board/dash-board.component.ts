import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {   FormsModule, ReactiveFormsModule } from '@angular/forms';
import {   Validators } from '@angular/forms';
import {   FormGroup } from '@angular/forms';
import {   FormControl } from '@angular/forms';


@Component({
  selector: 'app-dash-board',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './dash-board.component.html',
  styleUrl: './dash-board.component.css'
})
export class DashBoardComponent {
  
loginForm = new FormGroup(
  {
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.maxLength(6))
  }
)
validateUser() {
  if (this.loginForm.valid) {
    console.log(this.loginForm.value);
  }
  else
  {
    console.log("error");
  }
}
}
