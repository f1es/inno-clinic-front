import { Component } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { AppointmentCardComponent } from "../../cards/appointment-card/appointment-card.component";
import { AppointmentsService } from '../../services/appointments-service/appointments.service';
import { ExpansionContainerComponent } from "../../ui-components/expansion-container/expansion-container.component";
import { RoleService } from '../../services/role-service/role.service';

@Component({
  selector: 'app-appointments-page',
  imports: [HeaderComponent, AppointmentCardComponent, ExpansionContainerComponent],
  templateUrl: './appointments-page.component.html',
  styleUrl: './appointments-page.component.css'
})
export class AppointmentsPageComponent {
  public appointments: any;

  constructor(
    private appointmentService: AppointmentsService,
    protected roleService: RoleService) {}

  public ngOnInit(): void{
    this.getAppointments();
  }

  public getAppointments(): void{
    this.appointmentService.getAll().subscribe((appointments: any) => {
      this.appointments = appointments;
    });
  }
}
