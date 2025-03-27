import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { RoleService } from '../role-service/role.service';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url: string = "http://localhost:5006";
  constructor(
    private http: HttpClient,
    private roleService: RoleService) { }

  public login(email: string, password: string): Observable<HttpResponse<any>>{
    const data: any = {
      email: email,
      password: password
    }

    return this.http.post(this.url + '/api/accounts/login', data, {
      observe: 'response',
      withCredentials: true
    }).pipe(tap((response: HttpResponse<any>) => {
      if (response.status === 200){
        localStorage.setItem('access', response.body.accessToken);
      }
    }));
  }

  public refresh(): Observable<HttpResponse<any>>{
    return this.http.post(this.url + '/api/accounts/refresh', {}, {
      observe: 'response',
      withCredentials: true
    });
  }

  public logout(): void{
    this.http.post(this.url + '/api/accounts/logout', {}, {
      observe: 'response',
      withCredentials: true
    }).subscribe((response: HttpResponse<any>) => {
      if (response.status === 204){
        localStorage.removeItem('access');
      }
    });
  }

  public isAuthenticated(): boolean{
    return !!localStorage.getItem('access');
  }
}
