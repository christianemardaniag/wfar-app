import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcademicComponent } from './academic/academic.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DepartmentHeadComponent } from './department-head/department-head.component';
import { FacultyComponent } from './faculty/faculty.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { RegistrationComponent } from './registration/registration.component';
import { ReportUploadComponent } from './report/report-upload/report-upload.component';
import { ReportViewComponent } from './report/report-view/report-view.component';
import { ReportComponent } from './report/report.component';
import { SettingComponent } from './setting/setting.component';
import { DashboardBodyComponent } from './user-dashboard/dashboard-body/dashboard-body.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'wfar-admin', component: AdminLoginComponent },
  { path: 'setting', component: SettingComponent },
  { path: 'registration', component: RegistrationComponent },
  {
    path: 'main', component: MainComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      {
        path: 'faculty', component: FacultyComponent, children: [
          { path: ':id', component: DashboardBodyComponent },
          { path: 'view/:id', component: ReportViewComponent }
        ]
      },
      { path: 'department-head', component: DepartmentHeadComponent, children: [
        { path: ':id', component: DashboardBodyComponent }
      ]},
      { path: 'report', component: ReportComponent, children: [
        { path: 'upload/:id', component: DashboardBodyComponent },
        { path: 'view/:id', component: ReportViewComponent }
      ]},
      { path: 'academic', component: AcademicComponent },
    ]
  },
  { path: 'user', component: UserDashboardComponent, children: [
    { path: ':id', component: DashboardBodyComponent },
    { path: 'upload/:id', component: ReportUploadComponent },
    { path: 'view/:id', component: ReportViewComponent }
  ]},
  { path: '', redirectTo: '/login', pathMatch: "full" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
