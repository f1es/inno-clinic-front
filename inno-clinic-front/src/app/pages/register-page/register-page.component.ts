import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  imports: [],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {

constructor(private router: Router) {}

  public goBack(): void{
    this.router.navigate(['login']);
  }
}
