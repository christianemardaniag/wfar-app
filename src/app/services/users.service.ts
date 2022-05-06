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

  getAllActiveFaculty() {
    return this.http.get<any>(this.baseUrl + 'users.json').pipe(map(responseData => {
      const facultyForApproval = [];
      for (const key in responseData){
        if (responseData.hasOwnProperty(key)) {
          const e = responseData[key];
          if (e.status != 'archived' && e.position === 'faculty') {
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
          const e = responseData[key];
          if (e.status === 'for approval' && e.position === 'faculty') {
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

  getUserById(id:string){
    return this.http.get<any>(this.baseUrl + 'users/'+id+'.json');
  }
}
