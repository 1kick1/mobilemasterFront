import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../modelos/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginUserService {
  private baseUrl =  "http://localhost:8080/user/login";

  constructor(private httpClient: HttpClient) { }

  loginUser(user: User):Observable<object>{
    console.log(user);
    return this.httpClient.post(this.baseUrl, user);
  }
}
