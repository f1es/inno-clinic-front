import { Injectable } from '@angular/core';
import { Role } from './role.enum';
import { StorageService } from '../storage-service/storage.service';
import { JwtService } from '../jwt-service/jwt.service';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private jwtService: JwtService) { }

  public getRole(): Role {
    const role = this.jwtService.getRole();
    return this.parseRole(role);
  }

  public isReceptionist(): boolean {
    return this.jwtService.getRole() === Role.receptionist;
  }

  public isDoctor(): boolean {
    return this.jwtService.getRole() === Role.doctor;
  }

  public isPatient(): boolean {
    return this.jwtService.getRole() === Role.patient;
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
}
