import { Component } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { RoleService } from '../../services/role-service/role.service';
import { ProfileService } from '../../services/profile-service/profile.service';
import { Account } from '../../models/account.model';
import { ExpansionContainerComponent } from "../../ui-components/expansion-container/expansion-container.component";
import { AppointmentCardComponent } from "../../cards/appointment-card/appointment-card.component";

@Component({
  selector: 'app-profile-page',
  imports: [HeaderComponent, ExpansionContainerComponent, AppointmentCardComponent],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css'
})
export class ProfilePageComponent {
  public account: any;
  public appointments: any;

  constructor(
    protected roleService: RoleService, 
    private profileService: ProfileService) {}

  public ngOnInit(): void {
    this.profileService.getAccountInfo().subscribe((account: Account) => {
      this.account = account;
    });

    this.profileService.getAccountAppointments().subscribe((appointments: any) => {
      this.appointments = appointments;
    })
  }

}
