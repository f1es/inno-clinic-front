import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { map } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const router: Router = inject(Router);
  const authService: AuthService = inject(AuthService);

  return authService.isAuthenticated().pipe(map(isAuth => {
    console.log(isAuth);
    if (!isAuth){
      router.navigate(['login']);
      return false;
    }

    return true;
  }));
};
