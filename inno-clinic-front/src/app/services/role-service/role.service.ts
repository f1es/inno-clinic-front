import { Injectable } from '@angular/core';
import { Role } from './role.enum';
import { StorageService } from '../storage-service/storage.service';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private storage: StorageService) { }

  public getRole(): Role {
    const token = this.storage.getAccessToken();
    if (token){
      return this.getRoleFromJwt(token);
    }
    else {
      return Role.patient;
    }    
  }

  public isReceptionist(): boolean {
    return this.getRole() === Role.receptionist;
  }

  public isDoctor(): boolean {
    return this.getRole() === Role.doctor;
  }

  public isPatient(): boolean {
    return this.getRole() === Role.patient;
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
    try{
      const payload = this.decodeJwt(jwt);
      return this.parseRole(payload.role);
    }
    catch (error){
      return Role.patient;
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
