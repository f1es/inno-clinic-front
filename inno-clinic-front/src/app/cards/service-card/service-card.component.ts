import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RoleService } from '../../services/role-service/role.service';
import { MatDialog } from '@angular/material/dialog';
import { ServiceModalComponent } from '../../modals/service-modal/service-modal.component';
import { WarningModalComponent } from '../../modals/warning-modal/warning-modal.component';
import { ServicesService } from '../../services/services-service/services.service';

@Component({
  selector: 'app-service-card',
  imports: [NgClass],
  templateUrl: './service-card.component.html',
  styleUrl: './service-card.component.css'
})
export class ServiceCardComponent {

  constructor(
    protected roleService: RoleService,
    private servicesService: ServicesService,
    protected dialog: MatDialog) {}

  @Input() public service: any;
  
  public onEdit(): void{
      let dialogRef = this.dialog.open(ServiceModalComponent, {
        data: { 
          isEdit: true,
          service: this.service
        }
      });
    }

    public onDelete(): void{
          let dialogRef = this.dialog.open(WarningModalComponent, {
            data: { 
              action: this.servicesService.deleteDelegate,
              param: this.service.id
            }
          });
        }

}
