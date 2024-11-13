import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../../Services/user.service';
import { Router } from '@angular/router';
import { SignalService } from '../../../Services/signal.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm:any=null
  constructor(private builder:FormBuilder, private userService: UserService,private signal:SignalService,private route:Router){}

ngOnInit(){
  this.loginForm=new FormGroup({
    email:new FormControl(""),
    password:new FormControl("")
  })
}
  onSubmit(){
    console.log(this.loginForm.value);
     this.userService.validateUser(this.loginForm.value).subscribe((res)=>{
      console.log(res)
     if(res.length==1){
      localStorage.setItem('user',res[0].email);
       this.signal.isLogin();
      this.route.navigate(['/sideNav']);
     }
     })
  }

}
