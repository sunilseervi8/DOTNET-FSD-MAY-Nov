import { Component } from '@angular/core';
import { NewsServiceService } from '../services/news-service.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-card',
  standalone: true,
  imports: [DatePipe,CommonModule,FormsModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  


  constructor(private newService:NewsServiceService,private route: ActivatedRoute){}
  id:any;
  articles: any[] = [];
 
  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      console.log(this.id);
    });
    
    this.newService.getByQuery(this.id).subscribe((res)=> {

      this.articles = res.articles;
      console.log(res);
    })
  }

  
}
