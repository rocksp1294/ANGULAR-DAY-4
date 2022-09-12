import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './homepage/home/home.component';
import { TlhomepageComponent } from './component/login/team-leader/tlhomepage/tlhomepage.component';
import { PmHomepageComponent } from './component/login/project-manager/pm-homepage/pm-homepage.component';
import { HrHomepageComponent } from './component/login/hr/hr-homepage/hr-homepage.component';
import { InterviewerHomepageComponent } from './component/login/interviewer/interviewer-homepage/interviewer-homepage.component';
import { NewJobRequestComponent } from './component/login/team-leader/new-job-request/new-job-request.component';
import { EmployeeComponent } from './component/login/employee/employee.component';
import { GetEmployeeComponent } from './component/login/project-manager/get-employee/get-employee.component';
import { CareersComponent } from './component/login/career/careers/careers.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    TlhomepageComponent,
    PmHomepageComponent,
    HrHomepageComponent,
    InterviewerHomepageComponent,
    NewJobRequestComponent,
    EmployeeComponent,
    GetEmployeeComponent,
    CareersComponent,
  
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
