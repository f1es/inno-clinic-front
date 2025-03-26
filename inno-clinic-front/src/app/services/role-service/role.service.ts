import { Injectable } from '@angular/core';
import { Role } from './role.enum';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor() { }

  public getRole(): Role {
    const token = localStorage.getItem('access');
    if (token == null){
      return Role.patient;
    }
    else{
      return this.getRoleFromJwt(token);
    }
  }

  public isReceptionist(): boolean {
    return this.getRole() === Role.receptionist;
  }

  public isDoctor(): boolean {
    return this.getRole() === Role.doctor;
  }

  private parseRole(role: string): Role{
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
