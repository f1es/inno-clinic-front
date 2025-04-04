import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RoleService } from '../../services/role-service/role.service';
import { Role } from '../../services/role-service/role.enum';
import { MatDialog } from '@angular/material/dialog';
import { OfficeModalComponent } from '../../modals/office-modal/office-modal.component';
import { WarningModalComponent } from '../../modals/warning-modal/warning-modal.component';
import { OfficesService } from '../../services/offices-service/offices.service';

@Component({
  selector: 'app-office',
  imports: [NgClass],
  templateUrl: './office.component.html',
  styleUrl: './office.component.css'
})
export class OfficeComponent {

  constructor(
    private router: Router, 
    protected roleService: RoleService,
    private officeService: OfficesService,
    private dialog: MatDialog) { }

  @Input() office: any;
  public role: Role = Role.patient;

  public goToOffice(id: string) : void {
    this.router.navigate(['offices', id]);
  }

  public ngOnInit(): void {
    this.role = this.roleService.getRole();
  }

  public onEdit(): void{
      const dialogRef = this.dialog.open(OfficeModalComponent, { data: { 
        isEdit: true, 
        office: this.office }});
    };

  public onDelete(): void{
      let dialogRef = this.dialog.open(WarningModalComponent, {
        data: { 
          action: this.officeService.deleteDelegate,
          param: this.office.id
        }
      });
    }
}
