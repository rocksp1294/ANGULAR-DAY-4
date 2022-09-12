import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EmployeeDetails } from 'src/app/domain/EmployeeDetails';
import { JobDescription } from 'src/app/domain/JobDescription';
import { LoginDetails } from 'src/app/domain/LoginDetails';
import { EmployeeService } from 'src/app/services/employee.service';
import { TeamLeaderService } from 'src/app/services/tl-services/team-leader.service';

@Component({
  selector: 'app-tlhomepage',
  templateUrl: './tlhomepage.component.html',
  styleUrls: ['./tlhomepage.component.css']
})
export class TlhomepageComponent implements OnInit {

  employeeDetails: EmployeeDetails = new EmployeeDetails();
  allJobdescriptions: JobDescription[] = [];
  loginDetails: LoginDetails = new LoginDetails();
  constructor(private router: Router, private tlservice: TeamLeaderService,
    private employeeService: EmployeeService) { }
  ngOnInit(): void {
    this.loginDetails = JSON.parse(sessionStorage.getItem('login') || '{}');
    console.log("Login Object ");
    console.log(this.loginDetails);
    this.employeeService.getOneEmployee(this.loginDetails.loginid).subscribe(
      data => {
        this.employeeDetails = data;
        console.log(this.employeeDetails);
        this.tlservice.getOneFromJobDescription(this.employeeDetails.employeeId).subscribe(
          data => {
            this.allJobdescriptions = data;
            console.log(this.allJobdescriptions);

          }
        );
      }
    );
  }
  // getOneFromJobDescription(employeeId: string) {
  //   console.log("in getOneFromJobDescription");
  //   this.tlservice.getOneFromJobDescription(employeeId).subscribe(
  //     data => {
  //       this.allJobdescriptions = data;
  //       console.log(this.allJobdescriptions);
  //     }
  //   );
  // }
  addNewrequest() {
    console.log("in addNewrequest()");
    this.router.navigate(['new-job-request']);
  }
}
