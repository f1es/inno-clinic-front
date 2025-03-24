import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderComponent } from "../../header/header.component";
import { DoctorsService } from '../../services/doctors-service/doctors.service';
import { ServicesService } from '../../services/services-service/services.service';
import { FormsModule } from '@angular/forms';
import { OfficesService } from '../../services/offices-service/offices.service';
import { AppointmentsService } from '../../services/appointments-service/appointments.service';

@Component({
  selector: 'app-appointment-page',
  imports: [HeaderComponent, FormsModule],
  templateUrl: './add-appointment-page.component.html',
  styleUrl: './add-appointment-page.component.css'
})
export class AddAppointmentPageComponent {

  private officeId = '';
  protected office: any;
  protected doctors: any;
  protected doctor: any;
  protected day: Date = new Date();
  protected services: any;
  protected freeTimes: any;

  protected isDoctorSelected: boolean = false;
  protected isServiceSelected: boolean = false;
  protected isDaySelected: boolean = false;

  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private doctorsService: DoctorsService,
    private servicesService: ServicesService,
    private officesServices: OfficesService,
    private appointmentService: AppointmentsService) {}

  public ngOnInit(): void {
    this.officeId = this.route.snapshot.params['id'];
    this.getDoctorsOfOffice(this.officeId);
    this.getOfficeById();
  }

  public goBack(): void{
    this.router.navigate([`offices/${this.officeId}`]);
  }

  public getMinDate(): string{
    let today = new Date();
    today.setDate(today.getDate() + 1)
    return today.toISOString().split('T')[0];
  }

  public getMaxDate(): string{
    let today = new Date();
    today.setDate(today.getDate() + 14)
    return today.toISOString().split('T')[0];
  }

  public onDoctorSelect(): void{
    this.isDoctorSelected = true;
    this.getServicesOfDoctor(this.doctor.id);
  }

  public onDaySelect(): void{
    this.isDaySelected = true;
    this.getAppointmentFreeTimes(new Date(), 1);
  }

  public onServiceSelect(): void{
    this.isServiceSelected = true;
  }

  private getOfficeById(): void{
    this.officesServices.getById(this.officeId).subscribe((office: any) => {
      this.office = office;
    });
  }

  private getDoctorsOfOffice(officeId: string): void{
    this.doctorsService.getForOffice(officeId).subscribe((doctors: any) => {
      this.doctors = doctors;
    });
  }

  private getServicesOfDoctor(doctorId: string): void{
    this.servicesService.getServicesOfDoctor(doctorId).subscribe((services: any) => {
      this.services = services;
    });
  }

  private getAppointmentFreeTimes(day: Date, serviceTime: number): void{
    this.appointmentService.getFreeTimesOfDay(day, serviceTime).subscribe((freeTimes: any) => {
      this.freeTimes = freeTimes;
    });
  }
}
