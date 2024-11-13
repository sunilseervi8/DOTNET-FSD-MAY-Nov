import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Candidate } from '../model/candidate';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {
  candidateUrl="http://localhost:3000/Candidate";
  constructor(private httpClient:HttpClient) { }


  createCandidate(data:Candidate):Observable<Candidate>{
    console.log("data",data);
    
    return this.httpClient.post<Candidate>(this.candidateUrl,JSON.stringify(data));
  }
  getCandidate():Observable<Candidate[]>{
    return this.httpClient.get<Candidate[]>(this.candidateUrl);
  }
  getCandidateByID(id:string):Observable<Candidate[]>{
    return this.httpClient.get<Candidate[]>(this.candidateUrl+"?id="+id);
  }
  updateCandidate(id:string,data:Candidate):Observable<Candidate>{
    console.log("Service calling",data+" id",id);
    return this.httpClient.put<Candidate>(this.candidateUrl+"/"+id,JSON.stringify(data));
  }
  deleteCandidate(id: string): Observable<boolean> {

    const url = `${this.candidateUrl}/${id}`; // The URL should include the candidate's id
    return this.httpClient.delete<boolean>(url);
    // this.getCandidate();
  }
  validateUser(logindetails: any): Observable<any> {
    return this.httpClient.get<Candidate>(this.candidateUrl+"?email="+logindetails.email+"&password="+logindetails.password);
  }



signup(data:any):Observable<any>{
  return this.httpClient.post<any>("http://localhost:3000/SignUp",data);
}
login(data:any):Observable<any>{
  return this.httpClient.get<any>("http://localhost:3000/SignUp"+"?email="+data.email+"&password="+data.password);
}
}