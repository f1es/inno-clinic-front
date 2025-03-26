import { Injectable } from '@angular/core';
import { Role } from './role.enum';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { setRole } from './role.reducer';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private store: Store<{ role: string }>) { }


  public getRole(): Observable<Role> {
    return this.store.select('role').pipe(
      map(data => this.parseRole(data))
    );
  }

  public setRoleFromJwt(jwt: string): void{
    const role = this.getRoleFromJwt(jwt);
    this.store.dispatch(setRole({ role }));
  }

  public isReceptionist(role: Role): boolean {
    return role === Role.receptionist;
  }

  public isDoctor(role: Role): boolean {
    return role === Role.doctor;
  }

  public parseRole(role: string): Role{
    switch(role){
      case Role.doctor:
        return Role.doctor;
        
      case Role.receptionist:
        return Role.receptionist;

      default:
        return Role.patient;
    }
  } 

  private getRoleFromJwt(jwt: string): Role{
    const payload = this.decodeJwt(jwt);
    return this.parseRole(payload.role);
  }

  private decodeJwt(token: string): any {
    try {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(atob(base64).split('').map(c =>
        '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
      ).join(''));
      
      return JSON.parse(jsonPayload);
    } catch (e) {
      console.error('jwt decode error:', e);
      return null;
    }
  }
}
