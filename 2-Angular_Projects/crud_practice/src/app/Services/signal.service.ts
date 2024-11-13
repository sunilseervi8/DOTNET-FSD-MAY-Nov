import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignalService {
private someSignal=new BehaviorSubject<boolean>(false)
 

getSomeSingle():Observable<boolean>
{
   return this.someSignal.asObservable();
}
isLogin(){
  this.someSignal.next(true)
}
isLogout(){
  this.someSignal.next(false) 
}
 
}
