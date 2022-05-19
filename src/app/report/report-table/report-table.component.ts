import { Component, OnInit } from '@angular/core';
import { Academic } from 'src/app/model/academic.model';
import { Report } from 'src/app/model/report.model';
import { AcademicService } from 'src/app/services/academic.service';
import { ReportService } from 'src/app/services/report.service';

@Component({
  selector: 'app-report-table',
  templateUrl: './report-table.component.html',
  styleUrls: ['./report-table.component.css']
})
export class ReportTableComponent implements OnInit {

  report: Report[] = [];
  academic: Academic[] = [];
  id = localStorage.getItem('loggedId')!;
  
  constructor(
    private reportService: ReportService,
    private academicService: AcademicService) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    let pos = localStorage.getItem('position');
    if(pos == 'department head') {
      this.reportService.getAllReportHandledByID(this.id).subscribe(data => {
        this.report = data;
      })
    } else {
      this.reportService.getAllReport().subscribe(data => {
        this.report = data;
      })
    }
    this.academicService.getAllAcademic().subscribe(data => {
      this.academic = data;
    })
  }
}
