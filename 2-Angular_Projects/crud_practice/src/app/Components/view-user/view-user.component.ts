import { Component } from '@angular/core';
import { TaskService } from '../../Services/task.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-view-user',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './view-user.component.html',
  styleUrl: './view-user.component.css'
})
export class ViewUserComponent {
   users:any=[]
   constructor(private taskService: TaskService) { }
   ngOnInit(): void {
     this.taskService.getTask().subscribe((data) => {
       console.log("data", data)
       if(data.length > 0) {
       this.users =data
       }

     })
   }

   deleteUser(id:any) { 
    this.taskService.deleteTak(id).subscribe((data) => {
      console.log(data);
      window.location.reload();
    })
   }

}
