import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { OfficeDialogData } from './office-modal.data';

@Component({
  selector: 'app-office-modal',
  imports: [MatDialogModule],
  templateUrl: './office-modal.component.html',
  styleUrl: './office-modal.component.css'
})
export class OfficeModalComponent {
  constructor(public dialogRef: MatDialogRef<OfficeModalComponent>) {}

  protected readonly data = inject<OfficeDialogData>(MAT_DIALOG_DATA);
  protected isEdit: boolean = false;

  protected id: string = "";
  protected address: string = "";
  protected registryPhoneNumber: string = "";
  protected isActive: boolean = false;
  protected photoId: string = "";

  public ngOnInit(): void{
    this.isEdit = this.data.isEdit;
    if (this.data.isEdit){
      this.onEdit();
    }
  }

  private onEdit(): void{
    this.id = this.data.office.id;
    this.address = this.data.office.address;
    this.registryPhoneNumber = this.data.office.registryPhoneNumber;
    this.isActive = this.data.office.isActive;
    this.photoId = this.data.office.photoId;
  }
}



// "id": "4a073513-8fd4-402e-b85e-ff0987f9b354",
// "address": "ylica Ylichnaya",
// "registryPhoneNumber": "234-56-78",
// "isActive": false,
// "photoId": "https://i.ibb.co/ZzrH355/image.jpg"