import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  imports: [FormsModule],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {

constructor(private router: Router) {}

  protected firstName: string = "";
  protected lastName: string = "";
  protected middleName: string = "";
  protected email: string = "";
  protected password: string = "";
  protected phone: string = "";

  protected error: string = "";

  public goBack(): void{
    this.router.navigate(['login']);
  }

  protected register(): void{
    if (this.firstName.trim().length === 0){
      this.error = "First name is required";
    }
    else if (this.lastName.trim().length === 0){
      this.error = "Last name is required";
    }
    else if (this.middleName.trim().length === 0){
      this.error = "Middle name is required";
    }
    else if (this.email.trim().length === 0){
      this.error = "Email is required";
    }
    else if (this.password.trim().length === 0){
      this.error = "Password is required";
    }
    else if (this.phone.trim().length === 0){
      this.error = "Phone is required";
    }
    else{
      this.error = "";
    }
  }
}
