import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LoginUser } from '../model/login-user'; 
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // ضع الـ URL المناسب هنا لتسجيل الدخول
  loginUrl: string = 'https://localhost:7234/api/Account/login';  
  // ضع الـ URL المناسب هنا للتسجيل
  registerUrl: string = 'https://localhost:7234/api/Account/Register';  

  constructor(private http: HttpClient) {}

  // دالة لتسجيل الدخول
  login(user: LoginUser): Observable<any> {
    return this.http.post(this.loginUrl, user);
  }

  // دالة للتسجيل
  register(user: User): Observable<any> {
    return this.http.post(this.registerUrl, user);
  }
}
