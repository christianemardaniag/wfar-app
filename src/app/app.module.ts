import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AcademicComponent } from './academic/academic.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { MainComponent } from './main/main.component';
import { FacultyComponent } from './faculty/faculty.component';
import { DepartmentHeadComponent } from './department-head/department-head.component';
import { ReportComponent } from './report/report.component';
import { SettingComponent } from './setting/setting.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistrationComponent } from './registration/registration.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { DashboardHeaderComponent } from './user-dashboard/dashboard-header/dashboard-header.component';
import { DashboardBodyComponent } from './user-dashboard/dashboard-body/dashboard-body.component';
import { ReportBodyComponent } from './report/report-body/report-body.component';
import { ReportViewComponent } from './report/report-view/report-view.component';
import { ReportUploadComponent } from './report/report-upload/report-upload.component';
import { ReportTableComponent } from './report/report-table/report-table.component';
import { BlockedComponent } from './blocked/blocked.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    AcademicComponent,
    AdminLoginComponent,
    MainComponent,
    FacultyComponent,
    DepartmentHeadComponent,
    ReportComponent,
    SettingComponent,
    RegistrationComponent,
    UserDashboardComponent,
    DashboardHeaderComponent,
    DashboardBodyComponent,
    ReportBodyComponent,
    ReportViewComponent,
    ReportUploadComponent,
    ReportTableComponent,
    BlockedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
