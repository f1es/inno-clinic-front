import { Component, inject, Input } from '@angular/core';
import { WarningDialogData } from './warning-modal.data';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-warning-modal',
  imports: [MatDialogModule],
  templateUrl: './warning-modal.component.html',
  styleUrl: './warning-modal.component.css'
})
export class WarningModalComponent {
  constructor(public dialogRef: MatDialogRef<WarningModalComponent>) {}

  protected readonly data = inject<WarningDialogData>(MAT_DIALOG_DATA);

  protected onAccept(): void{
    this.data.action(this.data.param);
  }
}
