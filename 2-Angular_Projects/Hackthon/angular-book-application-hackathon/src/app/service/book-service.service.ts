import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  constructor( private http:HttpClient) { }
  url = "http://localhost:3000/book"
  addBook(data:any){
    return this.http.post(this.url,data)
  }
  getBooks(){
    return this.http.get(this.url)
  }

  deleteBook(id:any){
    return this.http.delete(`${this.url}/${id}`)
  }
}
