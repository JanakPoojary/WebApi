import { Component, OnInit } from '@angular/core';
import { employee } from '../employee.model';
import { EmployeeDataService } from '../employee-data.service';
import { Router } from '@angular/router';
import { EmpleaveDataService } from 'src/app/empleave/empleave-data.service';
import { Empleave } from 'src/app/empleave/empleave.model';
import { AuthService } from 'src/app/login/auth.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  searchFilter:string;
  errorMessage:string;
  constructor(private employeedata:EmployeeDataService,private route:Router, private empl:EmpleaveDataService) {}
  e1:Array<employee>;
  e2:Array<Empleave>;
  nid:number;
  ngOnInit(): void {
     this.fetchData();
  }
  fetchData(){
    this.employeedata.getEmployees().subscribe(
      e1 => {
        return this.e1 = e1;
      },
      error => this.errorMessage = <any>error
    );
    this.empl.getEmpLeaves().subscribe(
      e2 => {
        return this.e2 = e2;
      },
      error => this.errorMessage = <any>error
    );
  }
  delete(id:number){
    if(confirm("This will delete all the leaves taken by the employee before deleting the employee. Proceed?")){
    for(var i=0;i<this.e2.length;i++){
      if(this.e2[i].emp_id==id){
        this.nid=this.e2[i].elid;
        if(this.nid){
        this.empl.deleteEmpLeave(this.nid);
        }
      }
    }
    this.employeedata.deleteEmployee(id);
    window.location.reload();
  }
  }
}
