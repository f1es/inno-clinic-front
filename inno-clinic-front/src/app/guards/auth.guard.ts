import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { RoleService } from '../services/role-service/role.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router: Router = inject(Router);
  const authService: AuthService = inject(AuthService);
  const roleService: RoleService = inject(RoleService);

  if (!authService.isAuthenticated()){
    router.navigate(['login']);
    return false;
  }

  var roles = route.data['Roles'] as Array<string>;
  if (roles){
    if (roles.some(r => r === roleService.getRole())){
      return true
    } 
    else{
      // TODO: Forbidden
      router.navigate(['home']);
    }
  }

  return true;
};
