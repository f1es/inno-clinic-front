import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderComponent } from "../../header/header.component";

@Component({
  selector: 'app-appointment-page',
  imports: [HeaderComponent],
  templateUrl: './appointment-page.component.html',
  styleUrl: './appointment-page.component.css'
})
export class AppointmentPageComponent {

  private id = '';

  constructor(private router: Router, private route: ActivatedRoute) {}

  public ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
  }

  public goBack(): void{
    this.router.navigate([`office/${this.id}`]);
  }
}
