import { Component } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { ActivatedRoute } from '@angular/router';
import { OfficesService } from '../../services/offices-service/offices.service';
import { DoctorsService } from '../../services/doctors-service/doctors.service';
import { DoctorCardComponent } from "../../cards/doctor-card/doctor-card.component";

@Component({
  selector: 'app-office-page',
  imports: [HeaderComponent, DoctorCardComponent],
  templateUrl: './office-page.component.html',
  styleUrl: './office-page.component.css'
})
export class OfficePageComponent {

  public doctors: any;
  public office: any;
  public id: string = '';

  constructor(
    private route: ActivatedRoute, 
    private officeSerivce: OfficesService,
    private doctorsService: DoctorsService) { }
    
  public ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getOffice(this.id);
    this.getDoctors();
  }

  public getOffice(id: string) {
    this.officeSerivce.getById(id).subscribe((office: any) => {
      this.office = office;
    });
  }

  public getDoctors(){
    this.doctorsService.getAll().subscribe((doctors: any) => {
      this.doctors = doctors;
    });
  }

  public getStatus(): string{
    return this.office.isActive ? "Open" : "Closed";
  }
}
