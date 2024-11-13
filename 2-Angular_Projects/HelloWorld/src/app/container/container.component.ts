import { Component } from '@angular/core';
import {HeaderComponent} from '../header/header.component'
import { MainComponent } from'../main/main.component'
import{ FooterComponent } from '../footer/footer.component'

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    MainComponent

  ],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {

}
