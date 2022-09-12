import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginDetails } from 'src/app/domain/LoginDetails';

import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logindetails : LoginDetails= new LoginDetails();
  

  constructor(private loginService: LoginService,
    private router: Router ) { }

  ngOnInit(): void {
    
  }

  login()
  {
    console.log("In login()");
    console.log(this.logindetails);
    this.loginService.login(this.logindetails).subscribe
    (
      data=>{
        this.logindetails=data;
        console.log(this.logindetails);
        sessionStorage.setItem('login',JSON.stringify(this.logindetails));
        this.redirect();
        }
    );
      }

      redirect()
  {
    if(this.logindetails.designation === 'Team leader')
    {
      this.router.navigate(['tlhomepage']); 
    }

    else if(this.logindetails.designation ==='Project Manager')
    {
      this.router.navigate(['pm-homepage']);
    }

    else if(this.logindetails.designation ==='Interviewer')
    {
      this.router.navigate(['interviewer-homepage']);
    }

    else if(this.logindetails.designation ==='HR')
    {
      this.router.navigate(['hr-homepage']);
    }

    else if(this.logindetails.designation ==='Employee')
    {
      this.router.navigate(['employee']);
    }


  }
}
