import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Console, log } from 'console';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {
   url="http://localhost:3000/User"

  constructor(private httpclient:HttpClient) { }
 register(newUser:User):Observable<User>{
    return this.httpclient.post<User>(this.url,JSON.stringify(newUser));
   
 }
  
}
