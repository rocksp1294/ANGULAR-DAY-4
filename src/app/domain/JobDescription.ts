import { EmployeeDetails } from "./EmployeeDetails";
import { ProjectDetails } from "./project-details";

export class JobDescription{
    jobId: string ="";
    technicalSkills1 : string ="";
    technicalSkills2 : string = "";
    technicalSkills3 : string = "";
    requiredCandidates: string="";
    remainingBudget : number = 0;
    status: string ="";
    employeeDetails:EmployeeDetails= new EmployeeDetails(); 
    projectDetails : ProjectDetails = new ProjectDetails();
}