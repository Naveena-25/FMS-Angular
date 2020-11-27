import { Component, OnInit } from '@angular/core';
import { FlightService } from '../_service/flight.service';

@Component({
  selector: 'app-flight-info',
  templateUrl: './flight-info.component.html',
  styleUrls: ['./flight-info.component.css']
})
export class FlightInfoComponent implements OnInit {

  flights:any;

  constructor(private flightService:FlightService) { }

  ngOnInit(): void {
    let list = this.flightService.viewAllFlights();
    list.subscribe((data) => this.flights = data);
  }
  
}

