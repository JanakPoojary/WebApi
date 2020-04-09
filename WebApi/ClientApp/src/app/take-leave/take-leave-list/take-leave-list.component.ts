import { Component, OnInit } from '@angular/core';
import { EmpleaveDataService } from 'src/app/empleave/empleave-data.service';
import { Empleave } from 'src/app/empleave/empleave.model';
import { AuthService } from 'src/app/login/auth.service';
import { LeaveDataService } from 'src/app/leave/leave-data.service';
import { leave } from 'src/app/leave/leave.model';

@Component({
  selector: 'app-take-leave-list',
  templateUrl: './take-leave-list.component.html',
  styleUrls: ['./take-leave-list.component.css']
})
export class TakeLeaveListComponent implements OnInit {

  errorMessage:string;
  constructor(private employeedata:EmpleaveDataService, private auth:AuthService, private ldata:LeaveDataService) {}
  e1:Array<Empleave>;
  l1:Array<leave>
  empleave:Array<Empleave>;
  y:Array<Empleave>;
  daysleft:number;
  userid:number=this.auth.loggedInUserId;
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
  filterItemsOfType(){
    if(this.e1){
    return this.e1.filter(x => x.emp_id == this.userid);
    }
}
leaveleft(){
  if(this.e1 && this.l1){
  var a={};
  for(var k=0;k<this.l1.length;k++){
    a[this.l1[k].l_id]=0;
  }
  this.y=this.e1.filter(x => x.emp_id == this.userid);
  for(var i=0;i<this.y.length;i++){
    for(var j in a){
      if(this.y[i].leave_id==+j && this.y[i].status=="Approved"){
        a[j]=a[j]+this.calDays(this.y[i].start, this.y[i].end);
      }
    }
  }
  var lf={};
  for(var s=0;s<this.l1.length;s++){ 
    lf[this.l1[s].l_name]=this.l1[s].no_of_days-a[s+1];
  }
  return lf;
}
}
calDays(ds:string,de:string):number{
  var dateFirst = new Date(ds);
  var dateSecond = new Date(de);
  var timeDiff = Math.abs(dateSecond.getTime() - dateFirst.getTime());
  var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
  return diffDays+1;
}
}
