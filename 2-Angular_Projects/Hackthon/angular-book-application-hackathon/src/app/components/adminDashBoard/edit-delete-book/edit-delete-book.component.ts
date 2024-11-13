import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BookServiceService } from '../../../service/book-service.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-delete-book',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,FormsModule],
  templateUrl: './edit-delete-book.component.html',
  styleUrl: './edit-delete-book.component.css'
})
export class EditDeleteBookComponent {
  constructor(private bookService: BookServiceService,private fb: FormBuilder) { }
  books:any=[]

ngOnInit() {

  this.bookService.getBooks().subscribe((data) => {
    this.books = data
  })

}
deleteBook(id:any){
  this.bookService.deleteBook(id).subscribe((data) => {
    this.books = data
  })
}
 



  bookForms: FormGroup[] = [];



}