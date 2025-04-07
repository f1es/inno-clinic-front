import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtService } from '../jwt-service/jwt.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private http: HttpClient) { }

  public getAccountInfo(): any{
    return this.http.get(`http://localhost:5007/gateway/accounts/get-info`);
  }
}
