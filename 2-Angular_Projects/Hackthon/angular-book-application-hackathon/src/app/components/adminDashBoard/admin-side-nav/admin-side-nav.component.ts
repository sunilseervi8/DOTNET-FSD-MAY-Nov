import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin-side-nav',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './admin-side-nav.component.html',
  styleUrl: './admin-side-nav.component.css'
})
export class AdminSideNavComponent {

}
