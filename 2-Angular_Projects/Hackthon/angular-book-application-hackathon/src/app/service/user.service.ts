import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  userUrl="http://localhost:3000/user"
  
  addUser(data:User):Observable<any>{
    return this.http.post(this.userUrl,JSON.stringify(data))
   }

   validateUser(loginDetails:any) :Observable<any>{
  console.log(loginDetails)
    return this.http.get<any>(this.userUrl+`?email=${loginDetails.email}&password`);

  }
  isAuthenticated(){
    return !!localStorage.getItem('token');
   }

}
