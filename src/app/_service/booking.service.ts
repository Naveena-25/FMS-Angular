import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class BookingService {

 


  constructor(private http:HttpClient) { }

  confirmBooking(book) {
      return this.http.post("http://localhost:8080/booking",book);
  }

  

}