import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { SignalService } from '../../../Services/signal.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  active = 1;

  constructor(private signal:SignalService,private route:Router){}
  isLocalStorage=localStorage.getItem('user')
  isLocalLogin=false
  ngOnInit(){
    this.signal.getSomeSingle().subscribe((data)=>{
      
      this.isLocalLogin=data

    })
    
  }


}
