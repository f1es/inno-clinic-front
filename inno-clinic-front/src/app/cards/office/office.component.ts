import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RoleService } from '../../services/role-service/role.service';
import { Role } from '../../services/role-service/role.enum';
import { NgIcon } from '@ng-icons/core';
import { bootstrapTrash } from '@ng-icons/bootstrap-icons'

@Component({
  selector: 'app-office',
  imports: [NgClass, NgIcon],
  templateUrl: './office.component.html',
  styleUrl: './office.component.css'
})
export class OfficeComponent {

  constructor(
    private router: Router, 
    protected roleService: RoleService) { }

  @Input() office: any;
  public role: Role = Role.patient;

  public goToOffice(id: string) : void {
    this.router.navigate(['offices', id]);
  }

  public ngOnInit(): void {
    this.role = this.roleService.getRole();
  }
}
