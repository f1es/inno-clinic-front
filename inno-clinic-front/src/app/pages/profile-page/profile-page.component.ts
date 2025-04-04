import { Component } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { RoleService } from '../../services/role-service/role.service';
import { ProfileService } from '../../services/profile-service/profile.service';
import { Role } from '../../services/role-service/role.enum';

@Component({
  selector: 'app-profile-page',
  imports: [HeaderComponent],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css'
})
export class ProfilePageComponent {
  public account: any;
  public profile: any;

  constructor(
    protected roleService: RoleService, 
    private profileService: ProfileService) {}

  public ngOnInit(): void {
    this.profileService.getAccountInfo("").subscribe((account: any) => {
      this.account = account;
    });

    this.getProfileInfo();
  }

  private getProfileInfo(): void{
    switch(this.roleService.getRole()){
      case Role.receptionist: 
        this.profileService.getReceptionistProfile("").subscribe((receptionist: any) => {
          this.profile = receptionist;
        });
        break;

      case Role.doctor:
        this.profileService.getDoctorProfile("").subscribe((doctor: any) => {
          this.profile = doctor;
        });
        break;

      case Role.patient:
        this.profileService.getPatientProfile("").subscribe((patient: any) => {
          this.profile = patient;
        });
        break;
    }
  }
}
