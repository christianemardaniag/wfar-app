import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AcademicService {
  private baseUrl = "https://wfar-management-system-default-rtdb.firebaseio.com/";
  constructor(private http: HttpClient) {
    console.log("DATABASE: " + this.baseUrl);
  
   }
}
