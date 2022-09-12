import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JobDescription } from 'src/app/domain/JobDescription';

@Injectable({
  providedIn: 'root'
})
export class TeamLeaderService {
  private baseURl: string = "http://localhost:8080/";
  constructor(private httpClient: HttpClient) { }

  getOneFromJobDescription(employeeId:string): Observable<JobDescription[]> {
    
    console.log("in getOneFromJobDescription");
    return this.httpClient.get<JobDescription[]>(this.baseURl + "jobdescriptionapi/jobdescription/jd/"+employeeId);
  }

  

  
}
