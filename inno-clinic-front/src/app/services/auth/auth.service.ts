import { Injectable } from '@angular/core';
import {  Observable, tap } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { StorageService } from '../storage-service/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url: string = "http://localhost:5007";

  constructor(
    private http: HttpClient,
    private storage: StorageService) { }

  public login(email: string, password: string): Observable<HttpResponse<any>>{
    const data: any = {
      email: email,
      password: password,
    }

    return this.http.post(this.url + '/gateway/accounts/login', data, {
      observe: 'response',
      withCredentials: true
    }).pipe(tap((response: HttpResponse<any>) => {
      if (response.status === 200){
        this.storage.setAccessToken(response.body.accessToken);
        this.storage.setRefreshToken(response.body.refreshToken);
      }
    }));
  }

  public refresh(): Observable<HttpResponse<any>>{

    const access = this.storage.getAccessToken();
    const refresh = this.storage.getRefreshToken();

    let body = {}
    if (access && refresh){
      body = {
        accessToken: access,
        refreshToken: refresh
      }
    }

    return this.http.post(this.url + '/gateway/accounts/refresh', body, {
      observe: 'response',
      withCredentials: true
    }).pipe(tap((response: HttpResponse<any>) => {
      if (response.status === 200){
        this.storage.setAccessToken(response.body.accessToken);
        this.storage.setRefreshToken(response.body.refreshToken);
      }
    }));
  }

  public logout(): void{
    this.storage.removeTokens();
  }

  public isAuthenticated(): boolean{
    return !!this.storage.getAccessToken();
  }
}
