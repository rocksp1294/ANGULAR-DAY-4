import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JobDescription } from '../domain/JobDescription';
import { ProjectDetails } from '../domain/project-details';

@Injectable({
  providedIn: 'root'
})
export class JobdescriptionService {

private baseURL: string="http://localhost:8080/jobdescriptionapi/jobdescription"
  constructor(private httpClient: HttpClient) { }

  addNewRequest(jobdescription:JobDescription) : Observable<boolean>
  {
     console.log("in addNewRequest()");
     console.log(jobdescription);
     return this.httpClient.post<boolean>(this.baseURL,jobdescription);
     
     
  }

  showRequest(projectId : string) : Observable<JobDescription[]>{
    console.log("in showRequest()");
    return this.httpClient.get<JobDescription[]>(this.baseURL+"/pm/"+projectId);
  }

  getJobByJobId(jobId:string):Observable<JobDescription>{
    console.log("in getJobbyJobId");
    return this.httpClient.get<JobDescription>(this.baseURL+"/pm/job/"+jobId);
    
  }

  updateRequiredCandidate(jobdescription: JobDescription):Observable<JobDescription>{
    console.log("in updateRequiredcandidate");
   return this.httpClient.put<JobDescription>(this.baseURL+"/pm/requiredcandidates",jobdescription);
  }

  jobRequestApproved(jobdescription: JobDescription): Observable<JobDescription>{
console.log("in  jobRequestApproved()");
return this.httpClient.put<JobDescription>(this.baseURL+"/hr/status",jobdescription);

  }

  displayJobDescription(projectId: string) : Observable<JobDescription[]>{
    console.log("in displayJobDescription");
    return this.httpClient.get<JobDescription[]>(this.baseURL+"/hr/"+projectId);
  }

  publishToCareer(jobdescription: JobDescription) : Observable<JobDescription[]>{
    console.log("in publishToCareer");
    return this.httpClient.put<JobDescription[]>(this.baseURL+"/hr/career/status",jobdescription);
  }
}
