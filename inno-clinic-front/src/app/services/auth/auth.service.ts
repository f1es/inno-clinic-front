import { Injectable } from '@angular/core';
import { BehaviorSubject, firstValueFrom, Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public login(email: string, password: string): Observable<HttpResponse<any>>{
    const data: any = {
      email: email,
      password: password
    }

    return this.http.post('https://localhost:44366/api/accounts/login', data, {observe: 'response'});
  }

  public logout(): any{
    
  }
}
