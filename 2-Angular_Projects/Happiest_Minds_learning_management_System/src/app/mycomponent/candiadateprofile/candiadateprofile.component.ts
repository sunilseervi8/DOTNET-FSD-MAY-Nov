import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SidenavbarComponent } from '../sidenavbar/sidenavbar.component';

@Component({
  selector: 'app-candiadateprofile',
  standalone: true,
  imports: [RouterOutlet,SidenavbarComponent ,RouterLink],
  templateUrl: './candiadateprofile.component.html',
  styleUrl: './candiadateprofile.component.css'
})
export class CandiadateprofileComponent {

}
