import { Component } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { ActivatedRoute, Router } from '@angular/router';
import { OfficesService } from '../../services/offices-service/offices.service';
import { DoctorsService } from '../../services/doctors-service/doctors.service';
import { DoctorCardComponent } from "../../cards/doctor-card/doctor-card.component";
import { ServiceCardComponent } from "../../cards/service-card/service-card.component";
import { ServicesService } from '../../services/services-service/services.service';
import { ExpansionContainerComponent } from "../../ui-components/expansion-container/expansion-container.component";
import { RoleService } from '../../services/role-service/role.service';
import { DoctorModalComponent } from '../../modals/doctor-modal/doctor-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { ServiceModalComponent } from '../../modals/service-modal/service-modal.component';

@Component({
  selector: 'app-office-page',
  imports: [HeaderComponent, DoctorCardComponent, ServiceCardComponent, ExpansionContainerComponent],
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
    protected roleService: RoleService,
    private router: Router,
    private dialog: MatDialog) { }
    
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
    this.router.navigate([`offices/${this.id}/appointment`]);
  }

  public addDoctor: Function = () => {
    const dialogRef = this.dialog.open(DoctorModalComponent);
  }

  public addService: Function = () => {
    const dialogRef = this.dialog.open(ServiceModalComponent);
  }
}
