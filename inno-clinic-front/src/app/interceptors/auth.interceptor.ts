import { HttpErrorResponse, HttpInterceptorFn, HttpRequest, HttpResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { catchError, of, switchMap, throwError } from 'rxjs';
import { StorageService } from '../services/storage-service/storage.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const storage = inject(StorageService);

  req = addAccessTokenToRequest(req);

  console.log(req);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {

      if (error.status === 401 && authService.isTokenExpired() && storage.hasTokens()) { 
        return authService.refresh().pipe(
          switchMap(() => next(addAccessTokenToRequest(req))), catchError(() => {
            storage.resetTokens();
            return throwError(() => error)
          }));
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

