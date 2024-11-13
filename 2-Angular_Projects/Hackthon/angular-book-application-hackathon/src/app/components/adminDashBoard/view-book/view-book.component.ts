import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BookServiceService } from '../../../service/book-service.service';

@Component({
  selector: 'app-view-book',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-book.component.html',
  styleUrl: './view-book.component.css'
})
export class ViewBookComponent {

  constructor(private bookService: BookServiceService) { }
    books:any=[]

  ngOnInit() {
    this.bookService.getBooks().subscribe((data) => {
      this.books = data
    })
  }
}
