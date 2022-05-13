import { Component, Input, OnInit } from '@angular/core';

import { Report } from 'src/app/model/report.model';
import { Academic } from 'src/app/model/academic.model';

@Component({
  selector: 'app-report-body',
  templateUrl: './report-body.component.html',
  styleUrls: ['./report-body.component.css']
})
export class ReportBodyComponent implements OnInit {
  @Input() id: string = '';

  academic: Academic = new Academic;
  report: Report[] = [];

  isReportFetching = false;

  constructor() { }

  ngOnInit(): void {
  }

  goToReport(id: string) {
    
  }

}
