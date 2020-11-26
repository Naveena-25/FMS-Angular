import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FlightBookingComponent } from './flight-booking/flight-booking.component';
import { FlightInfoComponent } from './flight-info/flight-info.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
{path:'',component:HomeComponent},
{path:'flightsinfo', component:FlightInfoComponent},
{ path:'flight-search', component:FlightSearchComponent},
{ path: 'flight-booking', component:FlightBookingComponent},
{ path:'aboutus', component:AboutusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
