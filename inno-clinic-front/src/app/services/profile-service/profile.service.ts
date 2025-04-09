import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private http: HttpClient) { }

  public getAccountInfo(): any{
    return this.http.get(`http://localhost:5007/gateway/accounts/get-info`);
  }

  public getAccountAppointments(): any{
    return this.http.get("http://localhost:5007/gateway/appointments/for-patient");
  }
}
