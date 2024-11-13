import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {
  

  constructor(private htttpclient:HttpClient) { }
   dumyUrlApiKey="254a90440c1640c1bd90ba49d8aa27ef"
  getByQuery(value:string):Observable<any>{
    return this.htttpclient.get(`https://newsapi.org/v2/everything?q=${value}&apiKey=${this.dumyUrlApiKey}`);

  }
  
}
