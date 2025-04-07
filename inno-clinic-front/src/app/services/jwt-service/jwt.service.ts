import { Injectable } from '@angular/core';
import { Role } from '../role-service/role.enum';
import { StorageService } from '../storage-service/storage.service';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor(private storage: StorageService) { }

  public getRole(): string{

    const jwt = this.storage.getAccessToken();
    if (jwt == null){
      return "";
    }

    try{
      const payload = this.decodeJwt(jwt);
      return payload.role;
    }
    catch (error){
      return "";
    }
  }
  
  public getAccountId(): string{
    const jwt = this.storage.getAccessToken();
    if (!jwt){
      return "";
    }

    const payload = this.decodeJwt(jwt);
    return payload.accountId;
  }

  private decodeJwt(token: string): any {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(atob(base64).split('').map(c =>
        '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
      ).join(''));
      return JSON.parse(jsonPayload);
  }
}
