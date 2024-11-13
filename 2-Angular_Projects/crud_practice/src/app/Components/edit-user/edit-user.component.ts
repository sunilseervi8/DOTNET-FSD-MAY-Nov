import { Component } from '@angular/core';
import { TaskService } from '../../Services/task.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  standalone: true,
  imports: [CommonModule, FormsModule,ReactiveFormsModule

  ],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css',
})
export class EditUserComponent {
   

  registerForm=new FormGroup({
    id:new FormControl(''),
    fullName:new FormControl(''),
    email:new FormControl(''),
    password:new FormControl(''),
    confirmPassword:new FormControl(''),
  })
  constructor(private taskService: TaskService, private route: Router,private activeRoute: ActivatedRoute) {}
   id:any=''
  ngOnInit(){
    this.activeRoute.paramMap.subscribe((params) => {
      this.id = params.get('id');
      this.taskService.getTaskById(this.id).subscribe((data) => {
        this.registerForm.patchValue(data)
      })
    })
  }
  onSubmit(){
    this.taskService.updateTask(this.registerForm.value).subscribe((data) => {
      console.log(data);
      this.route.navigate(['sideNav/view-user'])
    })
  }
}

// if (registerForm.valid) {
//   console.log(registerForm.value);
//   this.taskService.addTask(registerForm.value).subscribe((data) => {
//     console.log(data);
//     registerForm.reset();
//   });