import { Component } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-office-modal',
  imports: [MatDialogModule],
  templateUrl: './office-modal.component.html',
  styleUrl: './office-modal.component.css'
})
export class OfficeModalComponent {
  constructor(public dialogRef: MatDialogRef<OfficeModalComponent>) {}
}
