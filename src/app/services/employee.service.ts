import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeDetails } from '../domain/EmployeeDetails';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseURL: string="http://localhost:8080/employeedetailsapi"

  constructor( private httpClient: HttpClient) { }

  getOneEmployee(loginId:string):Observable<EmployeeDetails>
  {
    
   return this.httpClient.get<EmployeeDetails>(this.baseURL+"/employeedetails/"+loginId);
  }

  getEmployee(jobId:string):Observable<EmployeeDetails[]>{
    return this.httpClient.get<EmployeeDetails[]>(this.baseURL+"/employeedetails/pm/"+jobId);
  }

changeInEmployeeDetails(employeeDetails : EmployeeDetails):Observable<EmployeeDetails>{
  console.log("in empservice");
  console.log(employeeDetails);
  return this.httpClient.put<EmployeeDetails>(this.baseURL+"/employeedetails",employeeDetails);
}

}
