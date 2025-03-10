import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(username: string, password: string){
    if (username === "123" && password === "123"){
      return 200;
    }
    else
    {
      return 401;
    }
  }

  logout(){
    
  }
}
