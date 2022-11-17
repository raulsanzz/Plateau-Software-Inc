import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  URL = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get(this.URL);
  }
}
