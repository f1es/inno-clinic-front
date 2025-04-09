import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UpdateAccountDto } from '../../dtos/account/update-account.dto';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor(private http: HttpClient) { }
  
  private url: string = "http://localhost:5007";  

  public getAccountInfo(): any{
    return this.http.get(this.url + `/gateway/accounts/get-info`);
  }

  public putAccount(id: string, updateAccountDto: UpdateAccountDto): Observable<Object> {
    return this.http.put(this.url + `/gateway/accounts/${id}`, updateAccountDto);
  }
}
