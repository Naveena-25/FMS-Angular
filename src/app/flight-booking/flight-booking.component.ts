import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookingService } from '../_service/booking.service';

@Component({
  selector: 'app-flight-booking',
  templateUrl: './flight-booking.component.html',
  styleUrls: ['./flight-booking.component.css']
})
export class FlightBookingComponent implements OnInit {
  message: string;

  constructor(private bookingService: BookingService) { }

  ngOnInit(): void {
  }

  bookTicket(form: NgForm) {
    this.bookingService.confirmBooking(form.value).subscribe((response) => {
      console.log(response);
      if (response) {
        this.message = "New Booking Added Successfully";
        setTimeout(() => {
          this.message = null;
        }, 4000);
      }
    }, error => {
      console.log(error);
    });
  }
}

