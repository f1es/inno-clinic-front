import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-office',
  imports: [NgClass],
  templateUrl: './office.component.html',
  styleUrl: './office.component.css'
})
export class OfficeComponent {

  constructor(private router: Router) { }

  @Input() office: any;

  goToOffice(id: string) : void {
    this.router.navigate(['office', id]);
  }
}
