import { Component, OnInit } from '@angular/core';
import { Empleave } from '../empleave.model';
import { EmpleaveDataService } from '../empleave-data.service';
import { EmpleavePost } from '../empleave-post.model';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LeaveDataService } from 'src/app/leave/leave-data.service';
import { leave } from 'src/app/leave/leave.model';

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
  constructor(private employeedata:EmpleaveDataService,private route:Router,private ar:ActivatedRoute,
     private http:HttpClient,private ldata:LeaveDataService) {}
  e1:Array<Empleave>;
  l1:Array<leave>;
  y:Array<Empleave>;
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
    this.ldata.getLeaves().subscribe(
      l1 => {
        return this.l1 = l1;
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
leaveleft(){
  var a={};
  var employee=[];
  var arr=[];
  var uniqid=[];
  for(var k=0;k<this.l1.length;k++){
    a[this.l1[k].l_id]=0;
  }
  for(var m=0;m<this.e1.length;m++){
    arr.push(this.e1[m].emp_id);
  }
    uniqid = Array.from(new Set(arr));
    uniqid=uniqid.reverse();
  for(var u=0;u<uniqid.length;u++){
    this.y=[];
    this.y=this.e1.filter(x => x.emp_id==uniqid[u]);
    for(var i=0;i<this.y.length;i++){
      for(var j in a){
        if(this.y[i].leave_id==+j && this.y[i].status=="Approved"){
          a[j]=a[j]+this.calDays(this.y[i].start, this.y[i].end);
        }
      }
    }
    var lf={};
    for(var s=0;s<this.l1.length;s++){
      for(var v=0;v<this.e1.length;v++){
        if(this.e1[v].emp_id==uniqid[u]){
          var name=this.e1[v].emp_name;
        }
      }
      lf["AEmployee"]=name;
      lf[this.l1[s].l_name]=this.l1[s].no_of_days-a[s+1];  
    }
    employee.push(lf);
    a={};
    for(var k=0;k<this.l1.length;k++){
      a[this.l1[k].l_id]=0;
    }
    lf={};
  }
    
  return JSON.parse(JSON.stringify(employee));
}

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
