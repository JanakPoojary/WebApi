import { Component, OnInit } from '@angular/core';
import { LeaveDataService } from '../leave/leave-data.service';
import { leave } from '../leave/leave.model';
import { EmpleavePost } from '../empleave/empleave-post.model';
import { AuthService } from '../login/auth.service';
import { EmpleaveDataService } from '../empleave/empleave-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-take-leave',
  templateUrl: './take-leave.component.html',
  styleUrls: ['./take-leave.component.css']
})
export class TakeLeaveComponent implements OnInit {

 
  errorMessage:string;
  constructor(private leavedata:LeaveDataService, private auth:AuthService,
     private empleavedata:EmpleaveDataService,private route:Router) { }
  e1:Array<leave>;
  leavetype:string;
  start:Date;
  end:Date;
  empleave1:EmpleavePost={
    el_id:0,
    empId:null,
    lveId:null,
    el_start:null,
    el_end:null,
    e_status:"pending"
  };
  ngOnInit(): void {
    this.leavedata.getLeaves().subscribe(
      e1 => {
        return this.e1 = e1;
      },
      error => this.errorMessage = <any>error
    );
  }
  apply(){
    if(this.e1){
    for (var i = 0; i < this.e1.length; i++) {
      if(this.e1[i].l_name == this.leavetype){
        this.empleave1.lveId=this.e1[i].l_id;
      }
    }
    this.empleave1.empId=this.auth.loggedInUserId;
    this.empleave1.el_start= this.start.toString();
    this.empleave1.el_end= this.end.toString();
    this.empleavedata.addEmpLeave(this.empleave1);
    this.ngOnInit();
    this.route.navigate(['/employeeDashboard/takeLeaveList']);
  }
}
}