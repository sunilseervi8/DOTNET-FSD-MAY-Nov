import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { BookServiceService } from '../../../service/book-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'] // Corrected property name
})
export class AddBookComponent {

  addBookForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private bookService: BookServiceService) {
    this.addBookForm = this.fb.group({
      bookName: ['', [Validators.required]],
      authorName: ['', [Validators.required]],
      categories: [''],
      bookImage: [''],
      publishYear: ['', [Validators.required]],
      edition: [''],
      language: [''],
      extension: ['pdf'] // default to PDF
    });
  }

  get f() {
    return this.addBookForm.controls;
  }

  onSubmit() {
    this.submitted = true;
  
    if (this.addBookForm.valid) {
      console.log(this.addBookForm.value);
      this.bookService.addBook(this.addBookForm.value).subscribe((data) => {
        console.log(data);
      })
    }
    else{
      console.log("nothing")
    }

   
    this.addBookForm.reset();
    this.submitted = false;
  }
}