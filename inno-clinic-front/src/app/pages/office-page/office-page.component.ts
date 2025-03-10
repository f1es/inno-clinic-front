import { Component } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { ActivatedRoute } from '@angular/router';
import { OfficesService } from '../../services/offices-service/offices.service';

@Component({
  selector: 'app-office-page',
  imports: [HeaderComponent],
  templateUrl: './office-page.component.html',
  styleUrl: './office-page.component.css'
})
export class OfficePageComponent {

  constructor(
    private route: ActivatedRoute, 
    private officeSerivce: OfficesService) { }

  public office: any;
  public id: string = '';

  public ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getOffice(this.id);
  }

  public getOffice(id: string) {
    this.officeSerivce.getById(id).subscribe((office: any) => {
      this.office = office;
    });
  }

  public getStatus(): string{
    return this.office.isActive ? "Open" : "Closed";
  }
}
