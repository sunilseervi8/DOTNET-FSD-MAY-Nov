import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, FormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { TaskServiceService } from '../../services/task-service.service';
// import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-addtask',
  standalone: true,
  imports: [
    MatExpansionModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
  ],
 
  templateUrl: './addtask.component.html',
  styleUrl: './addtask.component.css'
})
export class AddtaskComponent {

  taskForm: FormGroup = new FormGroup(
    {
      tittle: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required, Validators.minLength(10)]),
      status: new FormControl(''),
      date: new FormControl(''),

    }
  )
  constructor(private taskService: TaskServiceService) {

  }




  OnSaveTask() {

    if (this.taskForm.valid) {
      console.log(this.taskForm.value);
      this.taskService.addtask(this.taskForm.value)
        .subscribe((res) => {
          console.log(res);

        },
          (err) => {
            console.log(err);

          })

      alert("Added Successfully")

    }
    else {
      console.log("invalid");
      alert("Task Not Added ")


    }

  }

}
