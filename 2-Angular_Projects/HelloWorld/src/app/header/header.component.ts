import { Component } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';


// import{ContainerComponent} from '../header/header.component'
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
  MatMenuModule,
  MatButtonModule,
  MatIconModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
