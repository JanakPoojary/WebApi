import { Component, OnInit } from '@angular/core';
import { leave } from '../leave.model';
import { LeaveDataService } from '../leave-data.service';
import { Router } from '@angular/router';
import { EmpleaveDataService } from 'src/app/empleave/empleave-data.service';
import { Empleave } from 'src/app/empleave/empleave.model';

@Component({
  selector: 'app-leave-list',
  templateUrl: './leave-list.component.html',
  styleUrls: ['./leave-list.component.css']
})
export class LeaveListComponent implements OnInit {

 
  errorMessage:string;
  constructor(private leavedata:LeaveDataService,private route:Router,private empl:EmpleaveDataService) { }
  e1:Array<leave>;
  e2:Array<Empleave>;
  nid:number;
  ngOnInit(): void {
    this.fetchData();
  }
  fetchData(){
    this.leavedata.getLeaves().subscribe(
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
  if(confirm("This will delete this leaves record taken by the employees before deleting this leave. Proceed?")){
    for(var i=0;i<this.e2.length;i++){
      if(this.e2[i].leave_id==id){
        this.nid=this.e2[i].elid;
        if(this.nid){
        this.empl.deleteEmpLeave(this.nid);
        }
      }
    }
    this.leavedata.deleteLeave(id);
    this.fetchData();
    window.location.reload();
    }
  }
}
