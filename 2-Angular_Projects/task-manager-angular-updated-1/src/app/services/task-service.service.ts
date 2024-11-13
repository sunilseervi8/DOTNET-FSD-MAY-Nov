import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, TapObserver } from 'rxjs';
import { Taskdetails } from '../modle/taskdetails';

@Injectable({

  providedIn: 'root',

})

export class TaskServiceService {

  url = "http://localhost:4000/tasks";

  constructor(private httpclient: HttpClient) {

  }

  // add a new Task

  addtask(newtask: any): Observable<Taskdetails> {


    return this.httpclient.post<Taskdetails>(this.url, JSON.stringify(newtask));

  }

  getTasks(): Observable<Array<Taskdetails>> {

    return this.httpclient.get<Array<Taskdetails>>(this.url);
  }
  getTaskById() {
  }
  getTaskByStatus() {

  }
}
