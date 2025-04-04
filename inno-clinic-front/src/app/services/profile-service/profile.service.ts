import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  public getDoctorProfile(id: String): any{
    return this.http.get("http://localhost:4200/assets/data/doctor.json");
  }

  public getPatientProfile(id: String): any{

  }

  public getReceptionistProfile(id: string): any{

  }

  public getAccountInfo(id: String): any{
    return this.http.get("http://localhost:4200/assets/data/account.json");
  }
}
