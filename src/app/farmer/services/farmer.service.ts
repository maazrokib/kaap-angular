import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FarmerService {


  private url = "http://localhost:3000/create";  

  constructor(private http: HttpClient) {}

  // Add product with image upload
  add(formData: FormData) {
    return this.http.post(this.url, formData);
  }

  // Get all products
  getAll() {
    return this.http.get(this.url);
  }

  // Delete a product
  delete(id: any) {
    return this.http.delete(`${this.url}/${id}`);
  }

  // Get product by ID
  getById(id: any) {
    return this.http.get(`${this.url}/${id}`);
  }

  // Update product
  update(val: any) {
    return this.http.put(`${this.url}/${val.id}`, val);
  }
}
