import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeDetails } from 'src/app/domain/EmployeeDetails';
import { JobDescription } from 'src/app/domain/JobDescription';
import { LoginDetails } from 'src/app/domain/LoginDetails';
import { EmployeeService } from 'src/app/services/employee.service';
import { JobdescriptionService } from 'src/app/services/jobdescription.service';
import { TeamLeaderService } from 'src/app/services/tl-services/team-leader.service';

@Component({
  selector: 'app-new-job-request',
  templateUrl: './new-job-request.component.html',
  styleUrls: ['./new-job-request.component.css']
})
export class NewJobRequestComponent implements OnInit {
  employeeDetails: EmployeeDetails=new EmployeeDetails();
  loginDetails: LoginDetails = new LoginDetails();
  result: boolean=false;
  jobDescription: JobDescription = new JobDescription();;

  constructor(private teamLeaderService: TeamLeaderService,
    private jobDescriptionService: JobdescriptionService,
    private employeeService: EmployeeService,
    private router:Router) { }

  ngOnInit(): void {
     this.loginDetails=JSON.parse(sessionStorage.getItem('login') ||'{}');
     console.log(this.loginDetails);
     this.employeeService.getOneEmployee(this.loginDetails.loginid).subscribe(
      data=> {
        this.employeeDetails=data;
        console.log(this.employeeDetails);
      }
     );
     
  }

  addNewRequest()
  {
    console.log("in addNewRequest()");
    console.log(this.jobDescription);
    this.jobDescription.employeeDetails = this.employeeDetails;
    this.jobDescription.projectDetails = this.employeeDetails.projectDetails;
    this.jobDescriptionService.addNewRequest(this.jobDescription).subscribe(
      data=>{
        this.result=data;
        console.log(this.result);
        this.reload();  
      }
    ); 
  }
  reload()
  {
    this.router.navigate(['tlhomepage']);
  }

}
