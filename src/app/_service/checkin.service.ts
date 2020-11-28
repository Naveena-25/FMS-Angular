
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckInService {

 


  constructor(private http:HttpClient) { }

  public getCheckInById(cId) :Observable<any>{
    return this.http.get( 'http://localhost:8080/checkin/'+cId);
  }

  

}
