import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CareersComponent } from './component/login/career/careers/careers.component';
import { EmployeeComponent } from './component/login/employee/employee.component';
import { HrHomepageComponent } from './component/login/hr/hr-homepage/hr-homepage.component';
import { InterviewerHomepageComponent } from './component/login/interviewer/interviewer-homepage/interviewer-homepage.component';
import { LoginComponent } from './component/login/login.component';
import { GetEmployeeComponent } from './component/login/project-manager/get-employee/get-employee.component';
import { PmHomepageComponent } from './component/login/project-manager/pm-homepage/pm-homepage.component';
import { NewJobRequestComponent } from './component/login/team-leader/new-job-request/new-job-request.component';
import { TlhomepageComponent } from './component/login/team-leader/tlhomepage/tlhomepage.component';
import { JobDescription } from './domain/JobDescription';


const routes: Routes = [
  {path:'Login',component:LoginComponent},
  {path:'tlhomepage', component: TlhomepageComponent},
  {path:'pm-homepage', component: PmHomepageComponent},
  {path:'interviewer-homepage' , component: InterviewerHomepageComponent},
  {path:'hr-homepage', component: HrHomepageComponent},
  {path: 'new-job-request' , component: NewJobRequestComponent},
  {path:'employee', component:EmployeeComponent},
  {path: 'get-employee/:jobId', component: GetEmployeeComponent},
  {path: 'careers' , component: CareersComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
