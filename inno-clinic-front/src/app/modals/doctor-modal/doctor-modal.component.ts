import { Component } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-doctor-modal',
  imports: [MatDialogModule],
  templateUrl: './doctor-modal.component.html',
  styleUrl: './doctor-modal.component.css'
})
export class DoctorModalComponent {
  constructor (public dialogRef: MatDialogRef<DoctorModalComponent>) {}

  public getMinBirthday(): string{
    let today = new Date();
    let year = today.getFullYear() - 50;
    let minBday = `${year}-01-01`;
    return minBday;
  }

  public getMaxBirthday(): string{
    let today = new Date();
    let year = today.getFullYear() - 20;
    let maxBday = `${year}-01-01`;
    return maxBday;
  }

  public getToday(): string{
    let d = new Date().toISOString().split('T')[0]
    console.log(d);
    return d;
  }
}
