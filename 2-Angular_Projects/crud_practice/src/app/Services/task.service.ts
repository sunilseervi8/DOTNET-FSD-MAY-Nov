import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http:HttpClient) { }
  addTask(data:any):Observable<any>{
    return this.http.post('http://localhost:3000/task',JSON.stringify(data))
  }
  getTask():Observable<any>{
    return this.http.get('http://localhost:3000/task')
  }
  deleteTak(id:any):Observable<any>{
    return this.http.delete('http://localhost:3000/task/'+id)
  }
  getTaskById(id:any):Observable<any>{
    console.log(id);
    
    return this.http.get('http://localhost:3000/task/'+id)
  }
  updateTask(data:any):Observable<any>{
    return this.http.put('http://localhost:3000/task/'+data.id,JSON.stringify(data))
  }
}
