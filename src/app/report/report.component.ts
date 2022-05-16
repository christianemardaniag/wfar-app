import { Component, OnInit } from '@angular/core';
import { Academic } from '../model/academic.model';
import { Report } from '../model/report.model';
import { AcademicService } from '../services/academic.service';
import { ReportService } from '../services/report.service';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  report: Report[] = [];
  academic: Academic[] = [];
  
  constructor(
    private reportService: ReportService,
    private academicService: AcademicService) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.reportService.getAllReport().subscribe(data => {
      this.report = data;
    })
    this.academicService.getAllAcademic().subscribe(data => {
      this.academic = data;
    })
  }
}
