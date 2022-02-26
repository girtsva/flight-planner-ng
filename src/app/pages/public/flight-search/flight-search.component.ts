import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Flight } from 'src/app/shared/models/flight.model';
import { FlightService } from 'src/app/shared/services/flight.service';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.scss']
})
export class FlightSearchComponent implements OnInit {

  flightSearchForm = new FormGroup({});
  airports = ['RIX', 'ARN', 'DXB'];
  flights$?: Observable<Flight[]>;

  constructor(private fb: FormBuilder, private flightService: FlightService) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.flightSearchForm = this.fb.group({
      from: ['', Validators.required],
      to: ['', Validators.required],
      departureDate: ['', Validators.required]
    })
  }

  submitForm(): void {
    if(this.flightSearchForm.valid) {
      const query = {
        ...this.flightSearchForm.value,
        departureDate: new Date(this.flightSearchForm.value.departureDate).toISOString()
      }

      this.flights$ = this.flightService.searchFlights(query);
    }
  }
}
