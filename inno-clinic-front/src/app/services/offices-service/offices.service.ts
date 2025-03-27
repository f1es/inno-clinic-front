import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OfficesService {
  constructor(private http: HttpClient) { }

  private url: string = "https://localhost:44320";

  public getById(id: string): any{
    return this.http.get("http://localhost:4200/assets/data/office.json", {
      observe: 'response',
      withCredentials: true
    });
  }

  public getAll(): any{
    return this.http.get(this.url + "/api/offices");
  }

  public deleteDelegate: Function = (id: string) => {
    this.http.delete(`httpppppp/${id}`);
  }

  public delete(id: string): void{ 
    this.http.delete(`httpppppp/${id}`);
  }
}
