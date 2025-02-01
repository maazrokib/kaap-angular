import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FarmerService {

  
  constructor(private http: HttpClient){}

  url="http://localhost:3000/products";

  add(val:any){
    return this.http.post(this.url, val);
  }
  getAll(){
    return this.http.get(this.url);
  }
  delete(id: any) {
    return this.http.delete(this.url+'/'+id);
  }
  getById(id: any) {
    return this.http.get(this.url+'/'+id);
  }
  update(val:any){
    return this.http.put(this.url+'/'+val.id, val);
  }
}
