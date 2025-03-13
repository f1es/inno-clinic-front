import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { OfficesService } from '../../services/offices-service/offices.service';
import { ExpansionContainerComponent } from "../../ui-components/expansion-container/expansion-container.component";
import { OfficeComponent } from "../../cards/office/office.component";
import { HeaderComponent } from "../../header/header.component";

@Component({
  selector: 'app-offices-page',
  imports: [ExpansionContainerComponent, OfficeComponent, HeaderComponent],
  templateUrl: './offices-page.component.html',
  styleUrl: './offices-page.component.css'
})
export class OfficesPageComponent {
 public offices: any;
  
  constructor(private http: HttpClient, private officesSerivce: OfficesService) {
    this.getOfficesAssets();
   }
  
  public getOfficesAssets(): void{
    this.officesSerivce.getAll().subscribe((offices: Object) => {
      this.offices = offices;
    });
  }
}
