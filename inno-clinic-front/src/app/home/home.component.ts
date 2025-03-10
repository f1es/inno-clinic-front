import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { OfficeComponent } from "../office/office.component";

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, CommonModule, OfficeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  offices: any;
  
  constructor(private http: HttpClient) {
    this.getOfficesAssets();
   }
  
  getOfficesAssets(){
    this.http.get("http://localhost:4200/assets/data/offices.json").subscribe((offices) => {
      this.offices = offices;
      console.log(this.offices);
    })
  }
}
