import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderComponent } from "../../header/header.component";

@Component({
  selector: 'app-appointment-page',
  imports: [HeaderComponent],
  templateUrl: './add-appointment-page.component.html',
  styleUrl: './add-appointment-page.component.css'
})
export class AddAppointmentPageComponent {

  private id = '';

  constructor(private router: Router, private route: ActivatedRoute) {}

  public ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
  }

  public goBack(): void{
    this.router.navigate([`offices/${this.id}`]);
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
}
