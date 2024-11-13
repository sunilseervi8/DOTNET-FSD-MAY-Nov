import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [
    NavComponent
  ],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css'
})


export class NotificationComponent {
  
  closeNotification:boolean=false
  closeNotificationMethod() {
    this.closeNotification=true;
    // return this.closeNotification
  }
}
