import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { employee } from 'src/app/employee/employee.model';
import { EmployeeDataService } from 'src/app/employee/employee-data.service';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent implements OnInit {

  constructor(private Auth:AuthService, private router: Router, private employee:EmployeeDataService) { }
  email:string;
  e1:Array<employee>;
  errorMessage:string;
  message:string=null;
  s:boolean=false;
  ngOnInit() {
    this.employee.getEmployees().subscribe(
      e1 => {
        return this.e1 = e1;
      },
      error => this.errorMessage = <any>error
    );
  }
  login(){
    this.Auth.givenEmail=this.email;
    this.Auth.elist=this.e1;
    this.router.navigate(['/employeeDashboard']);
    for (var i = 0; i < this.e1.length; i++) {
      if(this.email == this.e1[i].e_email){
       this.s=true;
      }
    }
    if(this.s==false){
      this.message="This email Id is not registered as an employee";
    }
}

}
