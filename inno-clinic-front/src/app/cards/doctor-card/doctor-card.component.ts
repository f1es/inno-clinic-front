import { Component, Input } from '@angular/core';
import { RoleService } from '../../services/role-service/role.service';
import { MatDialog } from '@angular/material/dialog';
import { DoctorModalComponent } from '../../modals/doctor-modal/doctor-modal.component';
import { WarningModalComponent } from '../../modals/warning-modal/warning-modal.component';
import { DoctorsService } from '../../services/doctors-service/doctors.service';
import { Role } from '../../services/role-service/role.enum';

@Component({
  selector: 'app-doctor-card',
  imports: [],
  templateUrl: './doctor-card.component.html',
  styleUrl: './doctor-card.component.css'
})

export class DoctorCardComponent {
  constructor(
    protected roleService: RoleService,
    private dialog: MatDialog,
    private doctorServie: DoctorsService) {}

  @Input() doctor: any;
  role: Role = Role.patient;

  public ngOnInit(): void{
    this.roleService.getRole().subscribe((role) => {
      this.role = role;
    });
  }

  public onEdit(): void{
    let dialogRef = this.dialog.open(DoctorModalComponent, {
      data: { 
        isEdit: true,
        doctor: this.doctor
      }
    });
  }

  public onDelete(): void{
    let dialogRef = this.dialog.open(WarningModalComponent, {
      data: { 
        action: this.doctorServie.deleteDelegate,
        param: this.doctor.id
      }
    });
  }
}
