import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username = "";
  password = "";
  errorMessage = "";

  constructor(private auth: AuthService, private router: Router) { }

  login(){
    if (this.username.trim().length === 0){
      this.errorMessage = "Username is required"
    }
    else if (this.password.trim().length === 0){
      this.errorMessage = "Password is required"
    }
    else{
      this.errorMessage = "";
      let response = this.auth.login(this.username, this.password);
      if (response === 200){
        this.router.navigate(['home']);
      }
      else if (response === 401){
        this.errorMessage = "Invalid credentials"
      }
    }
  }
}
