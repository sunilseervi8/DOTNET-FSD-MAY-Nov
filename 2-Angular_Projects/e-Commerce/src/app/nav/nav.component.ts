import { Component, input } from '@angular/core';
import { NgbDropdownModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [NgbDropdownModule, NgbNavModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  searchedData:string="";
 search(searData:Event){
   this.searchedData=((<HTMLInputElement>searData.target).value)
  //  console.log(this.searchedData)
  
 }
  
}
