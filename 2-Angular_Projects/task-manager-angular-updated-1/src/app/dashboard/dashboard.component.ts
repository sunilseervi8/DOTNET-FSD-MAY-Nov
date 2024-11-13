import { Component } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatSidenavModule, 
    MatMenuModule,
     MatButtonModule, 
     RouterOutlet, 
     RouterLink,
    MatIconModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
