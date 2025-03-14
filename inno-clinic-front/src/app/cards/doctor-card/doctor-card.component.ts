import { Component, Input } from '@angular/core';
import { RoleService } from '../../services/role-service/role.service';

@Component({
  selector: 'app-doctor-card',
  imports: [],
  templateUrl: './doctor-card.component.html',
  styleUrl: './doctor-card.component.css'
})
export class DoctorCardComponent {
  constructor(protected roleService: RoleService) {}

  @Input() doctor: any;
}
