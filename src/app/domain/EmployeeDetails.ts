import { LoginDetails } from "./LoginDetails";
import { ProjectDetails } from "./project-details";

export class EmployeeDetails
{
    employeeId:string = "" ;
    employeeFirstName:string = "" ;
	employeeLastName:string = "" ;
	contactNo:string = "" ;
	hiredate:Date= new Date();
	highestqualification:string = "" ;
	gender:string = "";
	dateofbirth:Date= new Date();
	salary:number = 0;
	ctc:number = 0;
	onWorkbench:string = "";
	technicalskills1:string = "";
	technicalskills2:string = "";
	technicalskills3:string = "";
	designation:string = "";
	reportsto:string = "";
	loginDetails: LoginDetails = new LoginDetails();
	projectDetails : ProjectDetails = new ProjectDetails();
}