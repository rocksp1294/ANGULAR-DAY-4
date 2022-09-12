import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeDetails } from 'src/app/domain/EmployeeDetails';
import { JobDescription } from 'src/app/domain/JobDescription';
import { LoginDetails } from 'src/app/domain/LoginDetails';
import { ProjectDetails } from 'src/app/domain/project-details';
import { EmployeeService } from 'src/app/services/employee.service';
import { JobdescriptionService } from 'src/app/services/jobdescription.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-get-employee',
  templateUrl: './get-employee.component.html',
  styleUrls: ['./get-employee.component.css']
})
export class GetEmployeeComponent implements OnInit {
  submitted : boolean=false;
  loginDetails: LoginDetails = new LoginDetails();
  allemployeeDetails: EmployeeDetails[] = [];
  projectDetails: ProjectDetails = new ProjectDetails();
  jobdescription: JobDescription = new JobDescription();
  employeeDetails: EmployeeDetails = new EmployeeDetails();
  jobId: string = "";
  constructor(private router: Router,
    private employeeService: EmployeeService,
    private loginService: LoginService,
    private activatedRoute: ActivatedRoute,
    private jobDescriptionService: JobdescriptionService) { }

  ngOnInit(): void {

    this.jobId = this.activatedRoute.snapshot.params['jobId'];
    this.getEmployee(this.jobId);
    this.getJobByJobId(this.jobId);

    // this.loginDetails=JSON.parse(sessionStorage.getItem('login') ||'{}');
    // console.log(this.loginDetails);
    // this.employeeService.getOneEmployee(this.loginDetails.loginid).subscribe(
    //  data=> {
    //    this.employeeDetails=data;
    //    console.log(this.employeeDetails);
    //  }
    // );

  }

  getEmployee(jobId: string) {
    console.log("in getEmployee()");
    console.log(this.employeeDetails);
    this.employeeDetails = this.employeeDetails;

    this.employeeService.getEmployee(this.jobId).subscribe(
      data => {
        this.allemployeeDetails = data;
        console.log("data received");

        console.log(this.allemployeeDetails);

      }
    );
  }

  getJobByJobId(jobId: string) {
    this.jobDescriptionService.getJobByJobId(jobId).subscribe(
      data => {
        this.jobdescription = data;
        console.log(this.jobdescription);
console.log("in getjobbyid");

      }
    );

  }

  changeInEmployeeDetails(employeeDetails: EmployeeDetails) {
    console.log("in changeInEmployeeDetails!!");
    console.log(this.jobdescription);
    console.log(this.jobdescription.employeeDetails.employeeId);
    console.log(this.jobdescription.projectDetails);
    console.log(this.jobdescription.projectDetails.projectId);
    employeeDetails.projectDetails=this.jobdescription.projectDetails;
    employeeDetails.reportsto=this.jobdescription.employeeDetails.employeeId;
    console.log("updated employee");
    
    console.log(employeeDetails);

    this.employeeService.changeInEmployeeDetails(employeeDetails).subscribe(
      data => {
        console.log("In service!!!");
        this.employeeDetails = data;
        console.log(this.employeeDetails);

        this.updateRequiredCandidate(this.jobdescription);
      }
    );
  }

  updateRequiredCandidate(jobdescription: JobDescription){
    console.log("in updateRequiredCandidate()");
  this.jobDescriptionService.updateRequiredCandidate(jobdescription).subscribe(
    data=>{
      console.log("in update");
      this.jobdescription = data;
      console.log(this.jobdescription);
      
      
    }
  );    
  }
  backToApproval(){
    this.router.navigate(['pm-homepage']);
    //  this.submitted=true;
  }
}
