import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { OfficeComponent } from "../cards/office/office.component";
import { OfficesService } from '../services/offices-service/offices.service';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, CommonModule, OfficeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

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
