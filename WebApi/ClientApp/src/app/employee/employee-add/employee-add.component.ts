import { Component, OnInit } from '@angular/core';
import { employee } from '../employee.model';
import { EmployeeDataService } from '../employee-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {
  dob:Date;
  doj:Date;

  constructor(private employeedata:EmployeeDataService,private route:Router) { 
  }
  employee1:employee={
    e_id:0,
    e_name:null,
    e_dob:null,
    e_doj:null,
    e_salary: null,
    e_email:null
  };
  
  
  ngOnInit(): void {
    
  }
  
  add(){
    this.employee1.e_doj=this.doj.toString();
    this.employee1.e_dob=this.dob.toString();
    this.employeedata.addEmployee(this.employee1);
    this.route.navigate(['/adminDashboard/employeeList']).then(() => {
      window.location.reload();
    });
  }

}
