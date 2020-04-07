import { Component, OnInit } from '@angular/core';
import { EmployeeDataService } from '../employee/employee-data.service';
import { employee } from '../employee/employee.model';
import { AuthService } from '../login/auth.service';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css']
})
export class EmployeeProfileComponent implements OnInit {
  errorMessage:string;
  constructor(private employeedata:EmployeeDataService, private auth:AuthService) {}
  emp1:employee;
  ngOnInit() {
    this.employeedata.getEmployee(this.auth.loggedInUserId).subscribe(
      e1 => {
        return this.emp1 = e1;
      },
      error => this.errorMessage = <any>error
    );
  }

}
