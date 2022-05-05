import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl = "https://wfar-management-system-default-rtdb.firebaseio.com/";
  constructor(private http: HttpClient) {
    console.log("DATABASE: " + this.baseUrl);
   }

  getAllUsers() {
    return this.http.get<any>(this.baseUrl + 'users.json');
  }
}
