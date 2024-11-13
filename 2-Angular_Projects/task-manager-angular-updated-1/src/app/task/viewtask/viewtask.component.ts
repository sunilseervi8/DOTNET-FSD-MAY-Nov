import { Component } from '@angular/core';
import { Taskdetails } from '../../modle/taskdetails';
import { TaskServiceService } from '../../services/task-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-viewtask',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './viewtask.component.html',
  styleUrl: './viewtask.component.css'
})
export class ViewtaskComponent {

  taskList: Array<Taskdetails> = []
  constructor(private taskService: TaskServiceService) {

  }

  ngOnInit() {
    this.taskService.getTasks().subscribe((data) => {
      this.taskList = data
      console.log(this.taskList);
      
    },
    (err) => {
        console.log(err);

      }
    )

  }

}
