
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CheckIn } from '../checkin';

@Injectable({
  providedIn: 'root'
})
export class CheckInService {

 


  constructor(private http:HttpClient) { }

  public getCheckInById(cId) :Observable<any>{
    return this.http.get( 'http://localhost:9500/checkin/'+cId);
  }

  public postCheckIn(checkIn: CheckIn){
    return this.http.post('http://localhost:9500/checkin',checkIn);
  }

  public getAllCheckIn(){
    return this.http.get('http://localhost:9500/checkin/getAll');
  }

  

}
