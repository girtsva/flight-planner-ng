import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight, SearchFlightQuery } from 'src/app/shared/models/flight.model';
import { FlightService } from 'src/app/shared/services/flight.service';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.scss']
})
export class FlightSearchComponent {

  flights$?: Observable<Flight[]>;

  constructor(private flightService: FlightService) { }

  submitForm(query: SearchFlightQuery): void {
    this.flights$ = this.flightService.searchFlights(query);
  }
}
