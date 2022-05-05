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
import { ReportComponent } from './report/report.component';
import { SettingComponent } from './setting/setting.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'wfar-admin', component: AdminLoginComponent },
  { path: 'setting', component: SettingComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'main', component: MainComponent, 
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'faculty', component: FacultyComponent },
      { path: 'department-head', component: DepartmentHeadComponent },
      { path: 'report', component: ReportComponent },
      { path: 'academic', component: AcademicComponent },
    ]},
  { path: 'user/:id', component: UserDashboardComponent },
  { path: '', redirectTo: '/login', pathMatch: "full" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
