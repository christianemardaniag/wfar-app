import { Component, Input, OnInit, ɵNOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Report } from 'src/app/model/report.model';
import { FileUploadService } from 'src/app/services/file-upload.service';
import { ReportService } from 'src/app/services/report.service';

@Component({
  selector: 'app-report-view',
  templateUrl: './report-view.component.html',
  styleUrls: ['./report-view.component.css']
})
export class ReportViewComponent implements OnInit {
  @Input() id: string = '';
  // loggedIn = localStorage.getItem('loggedId')!;
  isFetching = false;
  reports: Report[] = [];
  ts: string[] = [];
  pa: string[] = [];
  pos = localStorage.getItem('position');

  constructor(private reportService: ReportService,
    private fileService: FileUploadService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        this.id = params.get('id')!;
      }
    );
    this.fetchReports();
  }

  fetchReports() {
    this.isFetching = true;
    console.log(this.id);
    this.ts = [];
    this.pa = [];
    this.reportService.getAllReportByUserId(this.id).subscribe(async data => {
      this.reports = data;
      this.isFetching = false;
      for (const x of this.reports) {
        for (let i = 0; i < x.teamMeetScreenshot.length; i++) {
          const name = x.teamMeetScreenshot[i];
          this.ts.push(await this.getUrl(name, 'teamMeetScreenshot'));
        }
        for (let i = 0; i < x.providedActivities.length; i++) {
          const name = x.providedActivities[i];
          this.pa.push(await this.getUrl(name, 'providedActivities'));
        }
      }
    })
  }


  getUrl(name: string, folder: string) {
    return this.fileService.getFile(name, folder);
  }

  changeStatus(id:string, status:string) {
    this.reportService.updateStatus(id, status).subscribe(()=>{
      this.fetchReports();
    });
  }

}
