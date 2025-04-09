import { Component } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { RoleService } from '../../services/role-service/role.service';
import { ProfileService } from '../../services/profile-service/profile.service';
import { Account } from '../../models/account.model';
import { ExpansionContainerComponent } from "../../ui-components/expansion-container/expansion-container.component";
import { AppointmentCardComponent } from "../../cards/appointment-card/appointment-card.component";
import { DocumentsService } from '../../services/documents-service/documents.service';
import { AccountsService } from '../../services/accounts-service/accounts.service';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-profile-page',
  imports: [HeaderComponent, ExpansionContainerComponent, AppointmentCardComponent],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css'
})
export class ProfilePageComponent {
  public account: any;
  public appointments: any;
  public imageUrl: string = "assets/data/blank.webp";

  constructor(
    protected roleService: RoleService, 
    private profileService: ProfileService,
    private documentsService: DocumentsService,
    private accountsService: AccountsService) {}

  public ngOnInit(): void {
    this.profileService.getAccountInfo().subscribe((account: Account) => {
      this.account = account;

      this.loadImage();
    });

    this.profileService.getAccountAppointments().subscribe((appointments: any) => {
      this.appointments = appointments;
    })
  }

  public onImageSelect(event: any): void {
    if (this.account.photoId){
      this.changeImage(event, this.account.photoId);
    }
    else{
      this.addImage(event).subscribe((response: any) => { 
        const updateAccountDto = {
          phoneNumber: this.account.phoneNumber,
          photoId: response.id
        };

        this.accountsService.putAccount(this.account.id, updateAccountDto).subscribe(() => {
          this.loadImage();
        });

      });
    }
  }

  private addImage(event: any): Observable<Object> {
    const formData = this.getFormDataFromEvent(event);
    return this.documentsService.postImage(formData).pipe(
      tap(() => this.loadImage())
    );
  }

  private changeImage(event: any, id: string): void {
    const formData = this.getFormDataFromEvent(event);
    this.documentsService.putImage(id, formData).subscribe(() => {
      this.loadImage();
    });
  }

  private getFormDataFromEvent(event: any): FormData {
    const file: File = event.target.files[0];
    const formData = new FormData();
    formData.append('photoFile', file);
    return formData;
  }

  private loadImage(): void{
    if (!this.account.photoId){
      return;
    }

    this.documentsService.getImageUrl(this.account.photoId).subscribe((response: any) => {
      this.imageUrl = response;
    });
  }
}
