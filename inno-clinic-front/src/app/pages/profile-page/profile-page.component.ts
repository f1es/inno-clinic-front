import { Component } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { RoleService } from '../../services/role-service/role.service';
import { ProfileService } from '../../services/profile-service/profile.service';

@Component({
  selector: 'app-profile-page',
  imports: [HeaderComponent],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css'
})
export class ProfilePageComponent {
  public account: any;
  public profile: any;
  public role: String = "";

  constructor(
    private roleService: RoleService, 
    private profileService: ProfileService) {}

  public ngOnInit(): void {
    this.role = this.roleService.getRole();

    this.profileService.getAccountInfo("").subscribe((account: any) => {
      this.account = account;
    });

    this.getProfileInfo();
  }

  private getProfileInfo(): void{
    switch(this.role){
      case "receptionist": 
        this.profileService.getReceptionistProfile("").subscribe((receptionist: any) => {
          this.profile = receptionist;
        });
        break;

      case "doctor":
        this.profileService.getDoctorProfile("").subscribe((doctor: any) => {
          this.profile = doctor;
        });
        break;

      case "":
        this.profileService.getPatientProfile("").subscribe((patient: any) => {
          this.profile = patient;
        });
        break;
    }
  }
}
