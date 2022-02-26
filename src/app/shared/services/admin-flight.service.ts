import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Flight } from '../models/flight.model';

@Injectable({
  providedIn: 'root'
})
export class AdminFlightService {

  constructor(private http: HttpClient) {
  }

  addFlight(query: any): Observable<Flight> {
    const url = [
      environment.baseUrl,
      'admin-api/flights'
    ].join('');

    const options = {headers: {'Add-Auth-Data': ''}, withCredentials: true}

    return this.http.put<Flight>(url, query, options);
  }
}