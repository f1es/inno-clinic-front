import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  private accessName: string = 'access';
  private refreshName: string = 'refresh';

  public setAccessToken(token: string): void {
    return localStorage.setItem(this.accessName, token);
  }

  public setRefreshToken(token: string): void {
    return localStorage.setItem(this.refreshName, token);
  }

  public getAccessToken(): string | null{
    return localStorage.getItem(this.accessName);
  }

  public getRefreshToken(): string | null{
    return localStorage.getItem(this.refreshName);
  }

  public resetTokens(): void {
    localStorage.removeItem(this.accessName);
    localStorage.removeItem(this.refreshName);
  }

  public hasTokens(): boolean {
    return this.getAccessToken() && this.getRefreshToken() ? true : false;
  }
}
