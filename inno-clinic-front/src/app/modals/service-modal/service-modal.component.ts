import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { ServiceDialogData } from './service-modal.data';

@Component({
  selector: 'app-service-modal',
  imports: [MatDialogModule],
  templateUrl: './service-modal.component.html',
  styleUrl: './service-modal.component.css'
})
export class ServiceModalComponent {
  constructor(public dialogRef: MatDialogRef<ServiceModalComponent>) {}

  protected readonly data = inject<ServiceDialogData>(MAT_DIALOG_DATA);
  protected isEdit: boolean = false;
  
  protected id: string = "";
  protected serviceName: string = "";
  protected price: string = "";
  protected isActive: boolean = false;
  protected specializationId: string = "";
  protected serviceCategoryId: string = "";

  public ngOnInit(): void{
    this.isEdit = this.data.isEdit;
    if (this.data.isEdit){
      this.onEdit();
    }
  }

  private onEdit(): void{
    this.id = this.data.service.id;
    this.serviceName = this.data.service.serviceName;
    this.price = this.data.service.price;
    this.isActive = this.data.service.isActive;
    this.specializationId = this.data.service.specializationId;
    this.serviceCategoryId = this.data.service.serviceCategoryId;
  }
}
