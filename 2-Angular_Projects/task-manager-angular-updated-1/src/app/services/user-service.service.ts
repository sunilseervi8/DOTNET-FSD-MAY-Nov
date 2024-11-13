import { Injectable } from '@angular/core';
import { User } from '../modle/user';
import { Observable } from 'rxjs';
import { UserRegistration } from '../modle/user-registration';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {


  url = "http://localhost:4000/users";

  constructor() { }

  //  Register a New usetr

  registerNewUser(newUser: UserRegistration): Promise<any> {
    // newUser.id = this.genrateId() + 1;
    return fetch(this.url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newUser)
    })

  }

  // get ALl user Deatils
  getAllUsers(): Promise<any> {
    return fetch(this.url);
  }

  // validate the User

  validateUser(email: string, password: string): any {
    return fetch(this.url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    })
  }

  genrateId(): number {
    let userList: any = [];
    let count=0;
    this.getAllUsers().then((res) => {
      // console.log(res);
      
      return res.json();
    })
      .then((data) => {
             
        userList = data;
        console.log(userList); 
        count= userList.Length;
        console.log(userList);
        
      }
      )
      .catch((err) => {
        console.log(err);

      })
    return count;
  }
}
