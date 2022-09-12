import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EmployeeDetails } from 'src/app/domain/EmployeeDetails';
import { JobDescription } from 'src/app/domain/JobDescription';
import { LoginDetails } from 'src/app/domain/LoginDetails';
import { EmployeeService } from 'src/app/services/employee.service';
import { JobdescriptionService } from 'src/app/services/jobdescription.service';

@Component({
  selector: 'app-hr-homepage',
  templateUrl: './hr-homepage.component.html',
  styleUrls: ['./hr-homepage.component.css']
})
export class HrHomepageComponent implements OnInit {
  allemployeedetails : EmployeeDetails[] =[];
  employeedetails: EmployeeDetails = new EmployeeDetails();
  logindetails : LoginDetails = new LoginDetails();
  jobdescription : JobDescription[] = []; 
  constructor(private jobdescriptionService : JobdescriptionService,
    private router: Router,
    private employeeService : EmployeeService) { }

  ngOnInit(): void {
    this.logindetails = JSON.parse(sessionStorage.getItem('login')||'{}');
    console.log("in logindetails()");
    console.log(this.logindetails);
    this.reloadData();
    
    }

   
  

  displayJobDescription(projectId : string){
    this.jobdescriptionService.displayJobDescription(projectId).subscribe(
      data=>{
        this.jobdescription = data;
        console.log(this.jobdescription);
        
      }
    );

    }

    publishToCareer(jobdescription:JobDescription){
      console.log("in publish Career");
      
      this.jobdescriptionService.publishToCareer(jobdescription).subscribe(
        data=>{
          this.jobdescription = data;
          console.log(this.jobdescription);
   
        }
      );
  
    }

    reloadData(){
      this.employeeService.getOneEmployee(this.logindetails.loginid).subscribe(
        data =>
        {
          this.employeedetails= data;
          console.log(this.employeedetails);
          this.jobdescriptionService.displayJobDescription(this.employeedetails.projectDetails.projectId).subscribe(
            data=>{
            this.jobdescription=data;
            console.log(this.jobdescription);  
            }
          );
        }
      );
    }
}

