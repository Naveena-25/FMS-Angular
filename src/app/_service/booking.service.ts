import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Booking } from '../booking';


@Injectable({
  providedIn: 'root'
})
export class BookingService {

 

  flightId:any;
  flightName:any;
  flightSource:any;
  flightDestination:any;
  flightDate:any;

  constructor(private http:HttpClient) { }

  bookingURL:string = "http://localhost:9000/booking";
  confirmBooking(book:Booking) {
      return this.http.post(this.bookingURL,book);
  }

  getBooking(bookingId){
    return this.http.get(this.bookingURL+"/"+bookingId);
  }

  //booking/checkin
  checkIn(bookingId){
    return this.http.get(this.bookingURL+"/checkin?bookingId="+bookingId);
  }

}