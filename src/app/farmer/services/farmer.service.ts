import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FarmerService {
  constructor(private http: HttpClient) {}
  // private url = "http://localhost:3000/auth";
  // Spring API URL
  url = "http://localhost:8080/api/farmerproducts";

  // নতুন ফার্মার প্রোডাক্ট অ্যাড করা
  add(val: any) {
    return this.http.post(this.url, val);
  }

  // সমস্ত ফার্মার প্রোডাক্ট নেওয়া
  getAll() {
    return this.http.get(this.url);
  }

  // ফার্মার প্রোডাক্ট ডিলিট করা
  delete(id: any) {
    return this.http.delete(`${this.url}/${id}`);
  }

  // ফার্মার প্রোডাক্ট ID অনুযায়ী নেওয়া
  getById(id: any) {
    return this.http.get(`${this.url}/${id}`);
  }

  // ফার্মার প্রোডাক্ট আপডেট করা
  update(val: any) {
    return this.http.put(`${this.url}/${val.id}`, val);
  }
}
