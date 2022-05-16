import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Report } from '../model/report.model';
import { FileUploadService } from './file-upload.service';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private baseUrl = "https://wfar-management-system-default-rtdb.firebaseio.com/";
  // report: Report = new Report;
  constructor(private http: HttpClient) {
    console.log("DATABASE: " + this.baseUrl);

  }

  getAllReport() {
    return this.http.get<any>(this.baseUrl + 'report.json').pipe(map(responseData => {
      const report = [];
      for (const key in responseData) {
        if (responseData.hasOwnProperty(key)) {
          const e = responseData[key];
          report.push({ ...responseData[key], id: key });
        }
      }
      return report;
    }));
  }

  getAllReportByUserId(userId: string) {
    return this.http.get<any>(this.baseUrl + 'report.json').pipe(map(responseData => {
      const report = [];
      for (const key in responseData) {
        if (responseData.hasOwnProperty(key)) {
          const e = responseData[key];
          if (e.userID === userId){
            report.push({ ...responseData[key], id: key });
          }
        }
      }
      return report;
    }));
  }

  uploadReport(report: Report) {
    return this.http.post(this.baseUrl + 'report.json', report);
  }

  updateStatus(id: string, status: string){
    return this.http.patch(this.baseUrl + 'report/' + id +'.json', {
      status: status
    });
  }

}
