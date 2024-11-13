import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor( private http:HttpClient) { }
  url='http://localhost:3000/admin'
  validateAdmin(data: any):Observable<any>{
    return this.http.get(this.url+`?email=${data.email}&password=${data.password}`)
  }
  isAuthenticated(){
    return !!localStorage.getItem('admin');
   }
  }

