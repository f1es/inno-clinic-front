import { Component, Input } from '@angular/core';
import { RoleService } from '../../services/role-service/role.service';
import { ResultsModalComponent } from '../../modals/results-modal/results-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-appointment-card',
  imports: [],
  templateUrl: './appointment-card.component.html',
  styleUrl: './appointment-card.component.css'
})
export class AppointmentCardComponent {
  @Input() appointment: any;

  constructor(
    protected roleService: RoleService,
    private dialog: MatDialog
  ) {}

  public getResult(): void {
    let dialogRef = this.dialog.open(ResultsModalComponent, {
      data: { 
        result: this.appointment.result 
      }
    });
  }
}
