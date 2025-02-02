import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiURL = "http://localhost:3000/auth"; 

  constructor(private httpClient: HttpClient) { }

  // ✅ ইউজার ডাটা রেজিস্টার করা
  addData(user: any): Observable<any> {
    return this.httpClient.post(`${this.apiURL}`, user);
  }

  // ✅ সকল ইউজার ডাটা আনা
  getAll(): Observable<any> {
    return this.httpClient.get(this.apiURL);
  }

  // ✅ ইউজার ইনফো লোকাল স্টোরেজে সংরক্ষণ
  saveUser(name: string, email: string, role: string, password: string) {
    localStorage.setItem('userName', name);
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userRole', role);
    localStorage.setItem('userPassword', password); // ❗️ শুধুমাত্র ডেভেলপমেন্টের জন্য, নিরাপদ নয়।
  }

  // ✅ ইউজার রোল বের করা
  getUserRole(): string {
    return localStorage.getItem('userRole') || '';
  }

  // ✅ ইউজার লগড ইন কিনা চেক করা
  isLoggedIn(): boolean {
    return !!localStorage.getItem('userName');
  }

  // ✅ লগআউট ফাংশন
  logout() {
    localStorage.clear();
  }
}
