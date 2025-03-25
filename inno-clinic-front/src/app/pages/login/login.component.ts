import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { CarouselModule } from 'primeng/carousel';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CarouselModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public username = "";
  public password = "";
  public errorMessage = "";
  public slides: any[] = [  
    {src: 'https://png.klev.club/uploads/posts/2024-05/png-klev-club-cnuw-p-durka-png-15.png', alt: ''},
    {src: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9cbba6e5-cffe-4537-a24a-305b77e34fb7/dfys10c-e03d2257-c6be-440f-b3b1-b000ef14e3d2.gif/v1/fill/w_498,h_498/maxwell_gif_by_lonelycoconut_dfys10c-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDk4IiwicGF0aCI6IlwvZlwvOWNiYmE2ZTUtY2ZmZS00NTM3LWEyNGEtMzA1Yjc3ZTM0ZmI3XC9kZnlzMTBjLWUwM2QyMjU3LWM2YmUtNDQwZi1iM2IxLWIwMDBlZjE0ZTNkMi5naWYiLCJ3aWR0aCI6Ijw9NDk4In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.Sh-_Bbe5cXqEf4tKdzBkr4KlTTGfth66VC_z17UzJaM', alt: ''},
    {src: 'coffin.png', alt: ''}
  ];

  constructor(private auth: AuthService, private router: Router) { }

  public login() : void{
    if (this.username.trim().length === 0){
      this.errorMessage = "Username is required"
    }
    else if (this.password.trim().length === 0){
      this.errorMessage = "Password is required"
    }
    else{
      this.errorMessage = "";
      const response = this.auth.login(this.username, this.password);
      response.subscribe((response: HttpResponse<any>) => {
        if (response.status === 200){
          this.router.navigate(['home']);
        }
        else{
          this.errorMessage = "Invalid credentials"
        }
      });
    }
  }

  public register() : void{
    this.router.navigate(['register']);
  }
}
