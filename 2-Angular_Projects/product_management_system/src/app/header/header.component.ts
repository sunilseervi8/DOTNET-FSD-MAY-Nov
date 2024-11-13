import { Component } from '@angular/core';
import { SubnavComponent } from '../subnav/subnav.component';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    SubnavComponent,
    NavComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
