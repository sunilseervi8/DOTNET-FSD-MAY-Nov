import { Component,EventEmitter,Input, Output } from '@angular/core';


@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {

  @Input() registration:string='';
  @Input() firstNameValue:string=""
  @Input() lastNameValue:string=""
  @Input() emailValue:string=""
  @Input() passwordValue:string=""

// we havae the differnt input properties 1.st required 2. tranform 3.alias
// 1.required 
// lets create the output r
@Output() regestrationSuccess:EventEmitter<any>=new EventEmitter<any>();
register(){
  this.regestrationSuccess.emit()
}

  
}
