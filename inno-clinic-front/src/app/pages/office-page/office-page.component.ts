import { Component } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { ActivatedRoute, Router } from '@angular/router';
import { OfficesService } from '../../services/offices-service/offices.service';
import { DoctorsService } from '../../services/doctors-service/doctors.service';
import { DoctorCardComponent } from "../../cards/doctor-card/doctor-card.component";
import { ServiceCardComponent } from "../../cards/service-card/service-card.component";
import { ServicesService } from '../../services/services-service/services.service';

@Component({
  selector: 'app-office-page',
  imports: [HeaderComponent, DoctorCardComponent, ServiceCardComponent],
  templateUrl: './office-page.component.html',
  styleUrl: './office-page.component.css'
})
export class OfficePageComponent {

  public doctors: any;
  public services: any;
  public office: any;
  public id: string = '';

  constructor(
    private route: ActivatedRoute, 
    private officeSerivce: OfficesService,
    private doctorsService: DoctorsService,
    private servicesService: ServicesService,
    private router: Router) { }
    
  public ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getOffice(this.id);
    this.getDoctors();
    this.getServices();
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

  public getServices(){
    this.servicesService.getAll().subscribe((services: any) => {
      this.services = services;
    });
  }

  public getStatus(): string{
    return this.office.isActive ? "Open" : "Closed";
  }

  public makeAppointment(): void{
    this.router.navigate([`office/${this.id}/appointment`]);
  }
}
