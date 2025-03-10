import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {

  constructor(private http: HttpClient) { }

  public getAll(): any{
    return this.http.get("http://localhost:4200/assets/data/doctors.json");
  }
}
