import { Component, OnInit } from '@angular/core';
import { EmployeeDataService } from 'src/app/employee/employee-data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { employee } from 'src/app/employee/employee.model';

@Component({
  selector: 'app-employee-profile-edit',
  templateUrl: './employee-profile-edit.component.html',
  styleUrls: ['./employee-profile-edit.component.css']
})
export class EmployeeProfileEditComponent implements OnInit {

  constructor(private employeedata:EmployeeDataService,private route:Router,private ar:ActivatedRoute, private http:HttpClient) { }
  id:number;
  url:string;
  editedEmployee:employee;
  employee1:employee={
    e_id:0,
    e_name:null,
    e_dob:null,
    e_doj:null,
    e_salary: null,
    e_email:null
  };

  ngOnInit() {
    this.ar.params.subscribe(params =>{
      this.id= +params['id'];
      });
      this.employeedata.getEmployee(this.id).subscribe(
        e1 => this.employee1 = e1
      );
      this.url=`https://localhost:44397/api/EmployeeDetails/${this.id}`;
    }
    editEmployee(){
      this.http.put(this.url, JSON.stringify(this.employee1),{headers: new HttpHeaders({'Content-Type': 'application/json'})}).subscribe(
        ()=>{
          return this.employeedata.getEmployees();
        }
      );
      this.route.navigate(['/employeeDashboard/takeLeaveList']).then(() => {
        this.route.navigate(['/employeeDashboard/employeeProfile']);
      });
    }

}
