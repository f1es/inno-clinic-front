import { Injectable } from '@angular/core';
import {  Observable, tap } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { StorageService } from '../storage-service/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url: string = "https://localhost:44366";

  constructor(
    private http: HttpClient,
    private storage: StorageService) { }

  public login(email: string, password: string): Observable<HttpResponse<any>>{
    const data: any = {
      email: email,
      password: password,
    }

    return this.http.post(this.url + '/api/accounts/login', data, {
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

    return this.http.post(this.url + '/api/accounts/refresh', body, {
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
    this.storage.resetTokens();
    this.http.post(this.url + '/api/accounts/logout', {}).subscribe();
  }

  public isAuthenticated(): boolean{
    return !!this.storage.getAccessToken();
  }

  public isTokenExpired(): boolean{
    const token = this.storage.getAccessToken();
    if (!token) {
      return false;
    }

    try {
      const decodedToken: any = this.decodeJwt(token);
      const expirationTime = decodedToken.exp;
      const currentTime = Math.floor(Date.now() / 1000);
      return expirationTime <= currentTime;

    } catch (error) {
      return false;
    }
  }

  private decodeJwt(token: string): any {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(c =>
      '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
    ).join(''));
    return JSON.parse(jsonPayload);
  }
}
