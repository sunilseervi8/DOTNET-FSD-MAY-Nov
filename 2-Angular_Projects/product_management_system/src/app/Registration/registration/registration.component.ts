import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule,NgForm} from '@angular/forms';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {


  OnSubmitForm(form:NgForm){
    console.log(form)
  }

}
