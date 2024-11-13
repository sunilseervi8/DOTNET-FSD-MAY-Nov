import { Component } from '@angular/core';
import { TaskService } from '../../Services/task.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {

  fullName: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
constructor(private taskService: TaskService, private route:Router) {}


onSubmit(registerForm: any) {
 if(registerForm.valid) {
  console.log(registerForm.value);
  this.taskService.addTask(registerForm.value).subscribe((data) => {
    console.log(data);
     registerForm.reset();
  }
  )
 }  
}
}
