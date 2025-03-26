import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { RoleService } from '../role-service/role.service';
import { Store } from '@ngrx/store';
import { setIsAuth } from './auth.reducer';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url: string = "http://localhost:5006"; // https://localhost:44366 http://localhost:5006

  constructor(
    private http: HttpClient,
    private roleService: RoleService,
    private store: Store<{ isAuth: boolean }>) { }

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
        this.roleService.setRoleFromJwt(response.body.accessToken);
        this.store.dispatch(setIsAuth( {isAuth: true} ));
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
        this.store.dispatch(setIsAuth( {isAuth: false} ));
      }
    });
  }

  public isAuthenticated(): Observable<boolean>{
    return this.store.select('isAuth').pipe(tap((bool) => {
      console.log(bool);
    }));
  }
}
