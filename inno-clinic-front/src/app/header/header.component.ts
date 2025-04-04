import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { RoleService } from '../services/role-service/role.service';
import { Role } from '../services/role-service/role.enum';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  public role: Role = Role.patient;

  constructor(
    private router: Router, 
    private auth: AuthService,
    protected roleService: RoleService) { }

  public ngOnInit(): void {
    this.role = this.roleService.getRole();
  }

  public toHomePage(): void{
    this.router.navigate(['home']);
  }

  public toAppointmentPage(): void{
    this.router.navigate(['appointments']);
  }

  public toProfilePage(): void{
    this.router.navigate(['profile']);
  }

  public toOfficesPage(): void {
    this.router.navigate(['offices']);
  }

  public logout(): void{
    this.auth.logout();
    this.router.navigate(['login'])
  }
}
