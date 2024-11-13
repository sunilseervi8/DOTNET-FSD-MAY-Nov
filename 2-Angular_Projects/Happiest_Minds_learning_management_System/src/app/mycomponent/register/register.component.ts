import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import{FormGroup,FormControl, ReactiveFormsModule, Validators, FormBuilder} from '@angular/forms'
import { TrainingService } from '../../service/training.service';
import { CandidateService } from '../../service/candidate.service';
import { ActivatedRoute, NavigationStart, Params, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  myForm!: FormGroup;
  actId!:string;
ngOnInit()  {
 this.myForm=new FormGroup({
    fname:new FormControl('',[Validators.required,Validators.minLength(2)]),
    email:new FormControl('',[Validators.email, Validators.required]),
    phone:new FormControl('',[Validators.required, Validators.minLength(10)]),
    dob:new FormControl('',[Validators.required]),
    qualification:new FormControl('',[Validators.required]),
    degree:new FormControl('',[Validators.required]),
    stream:new FormControl('',[Validators.required]),
    percentage:new FormControl('',[]),
    cgpa: new FormControl('',[]),
    select: new FormControl('',[Validators.required])
  
  
  })
  this.actId= String(this.activeRoute.snapshot.paramMap.get('id'));;
  console.log(this.actId);
  this.loadData()
}

 
// after clicking that either cgpa or percentage input should be displayed
constructor(private fb: FormBuilder,private candidateService:CandidateService,private activeRoute:ActivatedRoute,private route:Router) {
  // Initialize the form group
   this.myForm = this.fb.group({
    
     selection: [''],  // Radio button selection
     percentage: [''], // Input field for Percentage
     cgpa: ['']        // Input field for CGPA
   });
  
  
 }

 // Get the currently selected radio button value
 get selectedOption() {
   return this.myForm.get('select')?.value;
 }

 loadData(){
  if(this.actId){
    this.candidateService.getCandidateByID(this.actId).subscribe((data)=>{
      console.log(data)
      this.myForm.patchValue({
        fname:data[0].fname,
        email:data[0].email,
        phone:data[0].phone,
        dob:data[0].dob,
        qualification:data[0].qualification,
        degree:data[0].degree,
        stream:data[0].stream,
        percentage:data[0].percentage,
        cgpa:data[0].cgpa
      })
    })
  }
 }
//here we inject  the data to the servie
updateCandidate(){
  if(this.myForm.valid){
  console.log("success",this.myForm.value)
  this.candidateService.updateCandidate(this.actId,this.myForm.value).subscribe((data: any)=>{console.log(data)})
  this.myForm.reset()
  
  }
  else{
    console.log("failed")
  }
}

onSubmit(){
  if(this.myForm.valid){
  console.log("success",this.myForm.value)
  this.candidateService.createCandidate (this.myForm.value).subscribe((data)=>{console.log(data)})
  this.myForm.reset()
  }
  else{
    console.log("failed")
  }
}


}
