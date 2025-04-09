import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {

  constructor(private http: HttpClient) { }

  private url: string = "http://localhost:5004";

  public getImageUrl(id: string) {
    return this.http.get(this.url + `/api/photos/${id}`);
  }

  public postImage(image: FormData) {
    return this.http.post(this.url + `/api/photos`, image);
  }

  public putImage(id: string, image: FormData) {
    return this.http.put(this.url + `/api/photos/${id}`, image);
  }
}
