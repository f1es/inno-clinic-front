import { Component } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { RoleService } from '../../services/role-service/role.service';
import { ProfileService } from '../../services/profile-service/profile.service';
import { Account } from '../../models/account.model';

@Component({
  selector: 'app-profile-page',
  imports: [HeaderComponent],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css'
})
export class ProfilePageComponent {
  public account: any;

  constructor(
    protected roleService: RoleService, 
    private profileService: ProfileService) {}

  public ngOnInit(): void {
    this.profileService.getAccountInfo().subscribe((account: Account) => {
      console.log(account);
      this.account = account;
    });
  }

}
