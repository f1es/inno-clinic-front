import { Component, Input } from '@angular/core';
import { RoleService } from '../../services/role-service/role.service';
import { MatDialog } from '@angular/material/dialog';
import { DoctorModalComponent } from '../../modals/doctor-modal/doctor-modal.component';
import { DoctorsService } from '../../services/doctors-service/doctors.service';

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

  public onEdit(): void{
    let dialogRef = this.dialog.open(DoctorModalComponent, {
      data: { 
        isEdit: true,
        doctor: this.doctor
      }
    });
  }
}
