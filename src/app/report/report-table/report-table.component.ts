import { Component, OnInit } from '@angular/core';
import { Academic } from 'src/app/model/academic.model';
import { Report } from 'src/app/model/report.model';
import { AcademicService } from 'src/app/services/academic.service';
import { ReportService } from 'src/app/services/report.service';

interface ReportData {
  empName: string,
  submittedReport: ReportDetails[]
}

interface ReportDetails {
  week: number,
  status: string
}

@Component({
  selector: 'app-report-table',
  templateUrl: './report-table.component.html',
  styleUrls: ['./report-table.component.css']
})
export class ReportTableComponent implements OnInit {

  report: Report[] = [];
  academic: Academic[] = [];
  id = localStorage.getItem('loggedId')!;
  rep: ReportData[] = [];

  constructor(
    private reportService: ReportService,
    private academicService: AcademicService) { }

  ngOnInit(): void {
    this.fetchData();

  }

  arrangeReport() {
    for (const [i, x] of this.report.entries()) {
      let rd: ReportDetails[] = [];
      let j = i + 1;
      for (const v of this.academic) {

        if (x.academicID === v.id) {
          for (let index = 0; index < v.weeks.length; index++) {
            const element = v.weeks[index];
            console.log(x.week + '===' + element.weekCtr);
            // console.log();
            if (x.week == element.weekCtr) {
              rd.push({ week: element.weekCtr, status: x.status })
              try {
                do {
                  if (x.userID === this.report[j].userID) {
                    rd.push({ week: this.report[j].week, status: this.report[j].status })
                    this.report.splice(j, 1);
                  }
                  
                  j++;
                } while (j < this.report.length);
              } catch (error) {

              }
            } else {
              rd.push({ week: element.weekCtr, status: 'N/A' })
            }

          }

        }
      }

      this.rep.push({ empName: x.userName, submittedReport: rd });
    }
    console.log(this.rep);

  }

  fetchData() {
    this.academicService.getAllAcademic().subscribe(data => {
      this.academic = data;
      let pos = localStorage.getItem('position');
      if (pos == 'department head') {
        this.reportService.getAllReportHandledByID(this.id).subscribe(data => {
          this.report = data;
          this.arrangeReport();
        })
      } else {
        this.reportService.getAllReport().subscribe(data => {
          this.report = data;
          this.arrangeReport();
        })
      }

    })
  }
}
