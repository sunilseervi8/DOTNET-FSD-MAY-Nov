import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
   url="http://localhost:3000/user"
  constructor(private http:HttpClient) { }
   addUser(data:any):Observable<any>{
    console.log(data)
     return this.http.post(this.url,JSON.stringify(data))
   }
   validateUser(data:any):Observable<any>
   {
    return this.http.get(this.url+`?email=${data.email}&password=${data.password}`)
   }

   isAuthenticated(){
    return !!localStorage.getItem('user');
   }

}