import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginDetails } from '../domain/LoginDetails';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseURl: string = "http://localhost:8080";
  logindetails: LoginDetails = new LoginDetails();
  constructor(private httpClient: HttpClient) { }

  login(logindetails: LoginDetails): Observable<LoginDetails> {
    console.log("in login()");
    console.log(logindetails);
    return this.httpClient.post<LoginDetails>(this.baseURl + "/loginapi/login", logindetails);
  }

 
}
