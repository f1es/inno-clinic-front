import { Injectable } from '@angular/core';
import { Role } from './role.enum';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor() { }

  public getRole(): Role {
    return Role.receptionist;
  }

  public isReceptionist(): boolean {
    return this.getRole() === Role.receptionist;
  }

  public isDoctor(): boolean {
    return this.getRole() === Role.doctor;
  }
}
