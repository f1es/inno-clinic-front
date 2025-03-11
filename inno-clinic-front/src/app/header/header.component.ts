import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { RoleService } from '../services/role-service/role.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  public role: String = '';

  constructor(
    private router: Router, 
    private auth: AuthService,
    private roleService: RoleService) { }

  public ngOnInit(): void {
    this.role = this.roleService.getRole();
  }

  public goHome(): void{
    this.router.navigate(['home']);
  }

  public logout(): void{
    this.auth.logout();
    this.router.navigate(['login'])
  }
}
