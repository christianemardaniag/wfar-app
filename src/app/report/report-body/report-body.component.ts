import { Component, Input, OnInit, OnDestroy } from '@angular/core';

import { Report } from 'src/app/model/report.model';
import { Academic } from 'src/app/model/academic.model';
import { AcademicService } from 'src/app/services/academic.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { ReportService } from 'src/app/services/report.service';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-report-body',
  templateUrl: './report-body.component.html',
  styleUrls: ['./report-body.component.css']
})
export class ReportBodyComponent implements OnInit {
  @Input() id: string = '';

  report: Report[] = [];
  userStatus: string = '';
  paramsSubscription: Subscription = new Subscription;
  pos = localStorage.getItem('position');
  isReportFetching = false;

  constructor(private route: ActivatedRoute, private userService: UsersService,
    private reportService: ReportService,
    private router: Router) { }

  ngOnInit(): void {
    this.paramsSubscription = this.route.paramMap.subscribe(
      params => {
        this.id = params.get('id')!;
      }
    );
    console.log(this.id);
    this.isReportFetching = true;
    this.reportService.getAllReportByUserId(this.id).subscribe(data => {
      this.report = data;
      this.isReportFetching = false;
    })
    this.userService.getUserById(this.id).subscribe(data => {
      this.userStatus = data.status;
    });
  }

  
  goToReport(id: string) {
    let url = this.router.url
    let u = url.substring(0, url.lastIndexOf('/')); 
    this.router.navigate([u+'/view', this.id]);
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

}
