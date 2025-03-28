import { HttpErrorResponse, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { catchError, switchMap, throwError } from 'rxjs';
import { StorageService } from '../services/storage-service/storage.service';
import { Router } from '@angular/router';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const storage = inject(StorageService);
  const router = inject(Router);

  req = addAccessTokenToRequest(req);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) { 
        return authService.refresh().pipe(
          
          switchMap(() => {
            return next(addAccessTokenToRequest(req));

          }), catchError(() => {
            storage.removeTokens();
            router.navigate(['login']);
            return throwError(() => error);

          })
        )
      }
      
      return throwError(() => error);
    })
  );

  function addAccessTokenToRequest(request: HttpRequest<unknown>): HttpRequest<any>{
    const authType: string = "bearer";
  
    var authToken = storage.getAccessToken();
    if (authToken) {
      request = request.clone({
        setHeaders: { Authorization: `${authType} ${authToken}` }
      });
    }
  
    return request;
  }
};

