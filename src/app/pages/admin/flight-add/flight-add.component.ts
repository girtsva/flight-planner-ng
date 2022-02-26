import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdminFlightService } from '../../../shared/services/admin-flight.service';

@Component({
  selector: 'app-flight-add',
  templateUrl: './flight-add.component.html',
  styleUrls: ['./flight-add.component.scss']
})
export class FlightAddComponent implements OnInit {
  flightForm = new FormGroup({})

  constructor(private fb: FormBuilder, private adminFlightService: AdminFlightService) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.flightForm = this.fb.group({
      from: this.fb.group({
        country: [''],
        city: [''],
        airport: ['']
      }),
      to: this.fb.group({
        country: [''],
        city: [''],
        airport: ['']
      }),
      carrier: [''],
      departureTime: [''],
      arrivalTime: ['']
    })
  }

  submitForm(): void {
    this.adminFlightService.addFlight(this.flightForm.value).subscribe()
  }
}
