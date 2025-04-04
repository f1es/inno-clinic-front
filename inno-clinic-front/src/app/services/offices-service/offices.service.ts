import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OfficesService {
  constructor(private http: HttpClient) { }

  private url: string = "http://localhost:5007";

  public getById(id: string): any{
    return this.http.get(this.url + `/gateway/offices/${id}`, {
      observe: 'response',
      withCredentials: true
    });
  }

  public getAll(): any{
    return this.http.get(this.url + "/gateway/offices");
  }

  public deleteDelegate: Function = (id: string) => {
    this.http.delete(`httpppppp/${id}`);
  }

  public delete(id: string): void{ 
    this.http.delete(`httpppppp/${id}`);
  }
}
