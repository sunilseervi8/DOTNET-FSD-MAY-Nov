import { Component } from '@angular/core';
import { NotificationComponent } from '../notification/notification.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NotificationComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
