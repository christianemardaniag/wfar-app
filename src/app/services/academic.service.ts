import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Academic } from '../model/academic.model';
import { map } from 'rxjs';

import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class AcademicService {
  private baseUrl = "https://wfar-management-system-default-rtdb.firebaseio.com/";
  academic: Academic = new Academic;
  constructor(private http: HttpClient) {
    console.log("DATABASE: " + this.baseUrl);

  }

  addAcademic(f: NgForm) {
    this.setAcademicValue(f);
    return this.http.post(this.baseUrl + 'academic.json', this.academic);
  }

  setAcademicValue(f: NgForm) {
    this.academic.academicYear = f.form.value.academicYear;
    this.academic.semester = f.form.value.semester;
    this.academic.startDate = f.form.value.startDate;
    this.academic.endDate = f.form.value.endDate;
    let a = moment(this.academic.startDate);
    var b = moment(this.academic.endDate);
    var diff = moment.duration(b.diff(a));
    this.academic.noOfWeeks = Math.ceil(diff.asWeeks());
    for (let i = 0; i < this.academic.noOfWeeks; i++) {
      let start = a.day(0).toString();
      let end = a.day(6).toString();
      this.academic.weeks.push({start: start, end: end, weekCtr: i+1});
      a.add(1, 'week');
    }
  }

  getAllAcademic() {
    return this.http.get<Academic[]>(this.baseUrl + 'academic.json').pipe(map(responseData => {
      const data = [];
      for (const key in responseData) {
        if (responseData.hasOwnProperty(key)) {
          const e = responseData[key];
          data.push({ ...responseData[key], id: key });
        }
      }
      return data;
    }));
  }

  // getAllStartDate() {
  //   return this.http.get<any>(this.baseUrl + 'academic.json').pipe(map(responseData => {
  //     const data = [];
  //     for (const key in responseData) {
  //       if (responseData.hasOwnProperty(key)) {
  //         const e = responseData[key];
  //         data.push({ ...responseData[key], id: key });
  //       }
  //     }
  //     return data;
  //   }));
  // }


}
