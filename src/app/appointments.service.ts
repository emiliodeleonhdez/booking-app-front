import { Injectable } from '@angular/core';
import { environment } from "../environments/environment"
import { HttpClient } from "@angular/common/http"
import { Observable } from 'rxjs';
import { Appointment } from './Appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {

  private BASE_URL = environment.API_URL;

  constructor(private http: HttpClient) { }

  getAppointments(): Observable <Appointment[]>{
    return this.http.get<Appointment[]>(`${this.BASE_URL}/appointments`)
  }
}
