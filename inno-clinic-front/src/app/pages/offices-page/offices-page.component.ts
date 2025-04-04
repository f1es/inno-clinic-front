import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { OfficesService } from '../../services/offices-service/offices.service';
import { ExpansionContainerComponent } from "../../ui-components/expansion-container/expansion-container.component";
import { OfficeComponent } from "../../cards/office/office.component";
import { HeaderComponent } from "../../header/header.component";
import { RoleService } from '../../services/role-service/role.service';
import { MatDialog } from '@angular/material/dialog';
import { OfficeModalComponent } from '../../modals/office-modal/office-modal.component';
import { Role } from '../../services/role-service/role.enum';

@Component({
  selector: 'app-offices-page',
  imports: [ExpansionContainerComponent, OfficeComponent, HeaderComponent],
  templateUrl: './offices-page.component.html',
  styleUrl: './offices-page.component.css'
})
export class OfficesPageComponent {
  public offices: any;

  constructor(
    private officesSerivce: OfficesService, 
    protected roleService: RoleService,
    public dialog: MatDialog) { }
  
   public ngOnInit(): void {
    this.getOfficesAssets();
   }

  public getOfficesAssets(): void{
    this.officesSerivce.getAll().subscribe((offices: Object) => {
      this.offices = offices;
    });
  }

  public addOffice: Function = () => {
    const dialogRef = this.dialog.open(OfficeModalComponent, { data: { isEdit: false }});
  };
}
