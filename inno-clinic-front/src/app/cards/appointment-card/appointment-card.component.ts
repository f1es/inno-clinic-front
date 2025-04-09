import { Component, Input } from '@angular/core';
import { RoleService } from '../../services/role-service/role.service';

@Component({
  selector: 'app-appointment-card',
  imports: [],
  templateUrl: './appointment-card.component.html',
  styleUrl: './appointment-card.component.css'
})
export class AppointmentCardComponent {
  @Input() appointment: any;

  constructor(protected roleService: RoleService) {}
}
