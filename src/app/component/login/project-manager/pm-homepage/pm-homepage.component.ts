import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeDetails } from 'src/app/domain/EmployeeDetails';
import { JobDescription } from 'src/app/domain/JobDescription';
import { LoginDetails } from 'src/app/domain/LoginDetails';
import { ProjectDetails } from 'src/app/domain/project-details';
import { EmployeeService } from 'src/app/services/employee.service';
import { JobdescriptionService } from 'src/app/services/jobdescription.service';

@Component({
  selector: 'app-pm-homepage',
  templateUrl: './pm-homepage.component.html',
  styleUrls: ['./pm-homepage.component.css']
})
export class PmHomepageComponent implements OnInit {
  submitted : boolean=false;
  jobDescriptionApproved : JobDescription = new JobDescription();
  loginDetails: LoginDetails = new LoginDetails();
  projectDetails: ProjectDetails = new ProjectDetails();
  jobRequests: JobDescription[] = [];
  employeeDetails : EmployeeDetails = new EmployeeDetails();

  constructor(private jobdescriptionService: JobdescriptionService,
  private employeeService : EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
    this.loginDetails = JSON.parse(sessionStorage.getItem('login') || '{}');
    console.log("Login Object ");
    console.log(this.loginDetails);
    this.employeeService.getOneEmployee(this.loginDetails.loginid).subscribe(
      data => {
        this.employeeDetails = data;
        console.log(this.employeeDetails);
        this.jobdescriptionService.showRequest(this.employeeDetails.projectDetails.projectId).subscribe(
          data => {

            this.jobRequests = data;
            console.log(this.jobRequests);

          }
        );
      }
    );

    
  }
  getEmployee(jobId: string){
    console.log("in getEmployee()");
    this.router.navigate(['get-employee',jobId]);
    
    
  }
  showRequest(projectId:string) {
    this.jobdescriptionService.showRequest(this.projectDetails.projectId).subscribe(
      data => {
        this.jobRequests = data;
        console.log(this.jobRequests);

      }
    );


  }

  jobRequestApproved(jobdescription: JobDescription){
    this.jobdescriptionService.jobRequestApproved(jobdescription).subscribe(
      data=>{
        this.jobDescriptionApproved = data;
        console.log(this.jobDescriptionApproved);
       this.submitted=true;
      }
    );
  }

}
