import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  flightURL:string = "http://localhost:8080/flight_management";

  source:string = "";
  destination:string ="";
  date:string="";

  constructor(private http:HttpClient) { }

  public viewAllFlights(){
    return this.http.get(this.flightURL+"/viewAllFlights");
  }

  public viewAllFlightWithSourceDestinationDate(){
    return this.http.get(this.flightURL+"/getFlightBySourceDestinationDate?source="+this.source+"&&destination="+this.destination+"&&date="+this.date);
  }


}
