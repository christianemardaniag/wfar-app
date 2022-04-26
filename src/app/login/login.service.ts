import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl = "https://wfar-management-system-default-rtdb.firebaseio.com";
  user = { email: '', username: '', password: ''};
  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get<any>(this.baseUrl + '/users.json');
  }
}
