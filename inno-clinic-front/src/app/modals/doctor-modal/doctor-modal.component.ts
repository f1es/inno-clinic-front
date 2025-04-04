import { Component, inject, model, ModelSignal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { DoctorDialogData } from './doctor-modal.data';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-doctor-modal',
  imports: [
    MatDialogModule,
    MatDialogTitle,
    FormsModule,
    NgStyle],
  templateUrl: './doctor-modal.component.html',
  styleUrl: './doctor-modal.component.css'
})
export class DoctorModalComponent {
  constructor (
    public dialogRef: MatDialogRef<DoctorModalComponent>) {}

    protected readonly data = inject<DoctorDialogData>(MAT_DIALOG_DATA);
    protected isEdit: boolean = false;
    
    protected id: string = "";
    protected firstName: string = "";
    protected lastName: string = "";
    protected middleName: string = "";
    protected dateOfBirth: string = "";
    protected accountId: string = "";
    protected specializationId: string = "";
    protected officeId: string = "";

  public ngOnInit(): void {
    this.isEdit = this.data.isEdit;
    if (this.data.isEdit){
      this.onEdit();
    }
  }

  public getMinBirthday(): string{
    let today = new Date();
    let year = today.getFullYear() - 75;
    let minBday = `${year}-01-01`;
    return minBday;
  }

  public getMaxBirthday(): string{
    let today = new Date();
    let year = today.getFullYear() - 18;
    let maxBday = `${year}-01-01`;
    return maxBday;
  }

  public getToday(): string{
    let d = new Date().toISOString().split('T')[0]
    return d;
  }

  private onEdit(): void {    
    this.id = this.data.doctor.id;
    this.firstName = this.data.doctor.firstName;
    this.lastName = this.data.doctor.lastName;
    this.middleName = this.data.doctor.middleName;
    this.dateOfBirth = this.data.doctor.dateOfBirth;
    this.accountId = this.data.doctor.accountId;
    this.specializationId = this.data.doctor.specializationId;
    this.officeId = this.data.doctor.officeId;
  }
}
