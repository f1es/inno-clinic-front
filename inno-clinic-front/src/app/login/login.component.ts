import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username = "";
  password = "";
  errorMessage = "";

  login(){
    if (this.username.trim().length === 0){
      this.errorMessage = "Username is required"
    }

    if (this.password.trim().length === 0){
      this.errorMessage = "Password is required"
    }
  }
}
