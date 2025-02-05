import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // HttpClient ইনপোর্ট করা হচ্ছে
import { Observable } from 'rxjs'; // Observable ইনপোর্ট করা হচ্ছে

@Injectable({
  providedIn: 'root'
})
export class FarmerProductOfferService {

  // API URL যেখানে আপনি অফার ডেটা পাবেন
  private apiUrl = 'http://localhost:8080/api/farmerproductoffers';

  constructor(private httpClient: HttpClient) { }

  // সব অফার পাওয়ার জন্য মেথড
  getAllOffers(): Observable<any> {
    return this.httpClient.get(this.apiUrl); // GET অনুরোধ পাঠানো হচ্ছে
  }

  // একটি নতুন অফার তৈরি করার জন্য মেথড
  createOffer(offerData: any): Observable<any> {
    return this.httpClient.post(this.apiUrl, offerData); // POST অনুরোধ পাঠানো হচ্ছে
  }

  // একটি অফার আপডেট করার জন্য মেথড
  updateOffer(offerId: number, offerData: any): Observable<any> {
    return this.httpClient.put(`${this.apiUrl}/${offerId}`, offerData); // PUT অনুরোধ পাঠানো হচ্ছে
  }

  // একটি অফার মুছে ফেলানোর জন্য মেথড
  deleteOffer(offerId: number): Observable<any> {
    return this.httpClient.delete(`${this.apiUrl}/${offerId}`); // DELETE অনুরোধ পাঠানো হচ্ছে
  }
}
