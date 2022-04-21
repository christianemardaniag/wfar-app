import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcademicComponent } from './academic/academic.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'wfar-admin', component: AdminLoginComponent },
  { path: 'main', component: MainComponent, 
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'academic', component: AcademicComponent },
    ]},
  { path: '', redirectTo: '/login', pathMatch: "full" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
