import { Component, OnInit } from '@angular/core';
import { Empleave } from '../empleave.model';
import { EmpleaveDataService } from '../empleave-data.service';
import { EmpleavePost } from '../empleave-post.model';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-empleave-list',
  templateUrl: './empleave-list.component.html',
  styleUrls: ['./empleave-list.component.css']
})
export class EmpleaveListComponent implements OnInit {
  searchName:string;
  searchLeave:string;
  errorMessage:string;
  lstatus:string;
  url:string;
  constructor(private employeedata:EmpleaveDataService,private route:Router,private ar:ActivatedRoute, private http:HttpClient) {}
  e1:Array<Empleave>;
  t1:Empleave;
  x:number;
  ep1:EmpleavePost={
    el_id:null,
    empId:null,
    lveId:null,
    el_start:null,
    el_end:null,
    e_status:null
  };
  ngOnInit(): void {
    this.employeedata.getEmpLeaves().subscribe(
      e1 => {
        return this.e1 = e1;
      },
      error => this.errorMessage = <any>error
    );
  }
  filterItemsOfType(value:number){
    for(var i=0;i<this.e1.length;i++){
      if(this.e1[i].elid==value){
        this.t1=this.e1[i];
      }
    }
    this.approve();
}
delete(id:number){
this.employeedata.deleteEmpLeave(id);
}
// pendingLeave(i:number){
//     this.e1[i].leave_left=this.e1[i].leave_total-this.calDays(this.e1[i].start,this.e1[i].end);
//     this.e1[i].leave_total=this.e1[i].leave_left;
//     return this.e1[i].leave_left;
// }

approve(){
  this.ep1.el_id=this.t1.elid;
  this.ep1.empId=this.t1.emp_id;
  this.ep1.lveId=this.t1.leave_id;
  this.ep1.el_start=this.t1.start;
  this.ep1.el_end=this.t1.end;
  this.ep1.e_status=this.t1.status;
  this.url=`https://localhost:44397/api/EmpLeaves/${this.ep1.el_id}`;
  this.http.put(this.url, JSON.stringify(this.ep1),{headers: new HttpHeaders({'Content-Type': 'application/json'})}).subscribe(
    ()=>{
      console.log("Successfully updated status")
    }
  );
  this.route.navigate(['/adminDashboard/empleaveList']);
}


calDays(ds:string,de:string):number{
  var dateFirst = new Date(ds);
  var dateSecond = new Date(de);
  var timeDiff = Math.abs(dateSecond.getTime() - dateFirst.getTime());
  var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
  return diffDays+1;
}
}
