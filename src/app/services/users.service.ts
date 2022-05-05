import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { User } from '../model/user.model';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private baseUrl = "https://wfar-management-system-default-rtdb.firebaseio.com/";
  users: User[] = [];
  constructor(private http: HttpClient) {
    console.log("DATABASE: " + this.baseUrl);
   }

  getAllUsers() {
    return this.http.get<any>(this.baseUrl + 'users.json');
  }

  getAllActiveUsers() {
    return this.http.get<any>(this.baseUrl + 'users.json').pipe(map(responseData => {
      const facultyForApproval = [];
      for (const key in responseData){
        if (responseData.hasOwnProperty(key)) {
          const element = responseData[key];
          if (element.status != 'archived') {
            facultyForApproval.push(responseData[key]);
          }
        }
      }
      return facultyForApproval;
    }));
  }

  getForApprovalFaculty() {
    return this.http.get<any>(this.baseUrl + 'users.json').pipe(map(responseData => {
      const facultyForApproval = [];
      for (const key in responseData){
        if (responseData.hasOwnProperty(key)) {
          const element = responseData[key];
          if (element.status === 'for approval') {
            facultyForApproval.push(responseData[key]);
          }
        }
      }
      return facultyForApproval;
    }));
  }

  updateStatus(id: string, status: string){
    return this.http.patch(this.baseUrl + 'users/' + id +'.json', {
      status: status
    });
  }
}
