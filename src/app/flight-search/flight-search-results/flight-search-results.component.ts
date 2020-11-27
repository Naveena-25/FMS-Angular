import { Component, OnInit } from '@angular/core';
import { FlightService } from 'src/app/_service/flight.service';

@Component({
  selector: 'app-flight-search-results',
  templateUrl: './flight-search-results.component.html',
  styleUrls: ['./flight-search-results.component.css']
})
export class FlightSearchResultsComponent implements OnInit {

  constructor(private flightService:FlightService) { }

  flights:any
  ngOnInit(): void {
    let list = this.flightService.viewAllFlightWithSourceDestinationDate();
    list.subscribe((data) => this.flights = data);
  }

}
