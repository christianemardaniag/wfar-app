import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private baseUrl = "https://wfar-management-system-default-rtdb.firebaseio.com/";
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

  getAllActiveDepartmentHead(exceptID?: string) {
    return this.http.get<any>(this.baseUrl + 'users.json').pipe(map(responseData => {
      const departmentHead = [];
      for (const key in responseData){
        if (responseData.hasOwnProperty(key)) {
          const e = responseData[key];
          if (e.status != 'archived' && e.position === 'department head') {
            if(exceptID && exceptID === e.employeeNo){             
              continue;
            }
            departmentHead.push(responseData[key]);
          }
        }
      }
      return departmentHead;
    }));
  }

  getAllActiveFacultyHandleBy(handleBy: string) {
    return this.http.get<any>(this.baseUrl + 'users.json').pipe(map(responseData => {
      const users = [];
      for (const key in responseData){
        if (responseData.hasOwnProperty(key)) {
          const e = responseData[key];
          if (e.status != 'archived' 
          && e.position === 'faculty'
          && e.handleById === handleBy) {
            users.push(responseData[key]);
          }
        }
      }
      return users;
    }));
  }

  getForApprovalFaculty() {
    return this.http.get<any>(this.baseUrl + 'users.json').pipe(map(responseData => {
      const users = [];
      for (const key in responseData){
        if (responseData.hasOwnProperty(key)) {
          const e = responseData[key];
          if (e.status === 'for approval' && e.position === 'faculty') {
            users.push(responseData[key]);
          }
        }
      }
      return users;
    }));
  }

  getForApprovalFacultyByDepartmentHead(handleBy: string) {
    return this.http.get<any>(this.baseUrl + 'users.json').pipe(map(responseData => {
      const users = [];
      for (const key in responseData){
        if (responseData.hasOwnProperty(key)) {
          const e = responseData[key];
          if (e.status === 'for approval' 
            && e.handleById === handleBy) {
            users.push(responseData[key]);
          }
        }
      }
      return users;
    }));
  }

  getHandleFaculty(id: string) {
    return this.http.get<any>(this.baseUrl + 'users.json').pipe(map(responseData => {
      const users = [];
      for (const key in responseData){
        if (responseData.hasOwnProperty(key)) {
          const e = responseData[key];
          if (e.handleById === id) {
            users.push(responseData[key]);
          }
        }
      }
      return users;
    }));
  }

  getUserById(id:string){
    return this.http.get<any>(this.baseUrl + 'users/'+id+'.json');
  }

  updateStatus(id: string, status: string, updateBy?: string){
    return this.http.patch(this.baseUrl + 'users/' + id +'.json', {
      status: status,
      updateBy: updateBy
    });
  }

  updatePosition(id: string, position: string){
    return this.http.patch(this.baseUrl + 'users/' + id +'.json', {
      position: position
    });
  }

  updateInfo(id: string, info: any){
    return this.http.patch(this.baseUrl + 'users/' + id +'.json', info);
  }
  
}
