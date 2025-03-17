import { Component } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-service-modal',
  imports: [MatDialogModule],
  templateUrl: './service-modal.component.html',
  styleUrl: './service-modal.component.css'
})
export class ServiceModalComponent {
  constructor(public dialogRef: MatDialogRef<ServiceModalComponent>) {}
}
