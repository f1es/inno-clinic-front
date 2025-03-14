import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RoleService } from '../../services/role-service/role.service';

@Component({
  selector: 'app-service-card',
  imports: [NgClass],
  templateUrl: './service-card.component.html',
  styleUrl: './service-card.component.css'
})
export class ServiceCardComponent {

  constructor(protected roleService: RoleService) {}

  @Input() public service: any;
  
}
