import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {

  constructor(private http: HttpClient) { }

  public getById(id: String): any{
    return this.http.get("http://localhost:4200/assets/data/appointment.json");
  }

  public getAll(): any{
    return this.http.get("http://localhost:4200/assets/data/appointments.json");
  }
}
