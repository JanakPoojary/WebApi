import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { leave } from '../leave.model';
import { LeaveDataService } from '../leave-data.service';

@Component({
  selector: 'app-leave-edit',
  templateUrl: './leave-edit.component.html',
  styleUrls: ['./leave-edit.component.css']
})
export class LeaveEditComponent implements OnInit {

  constructor(private leavedata:LeaveDataService,private route:Router,private ar:ActivatedRoute, private http:HttpClient) { }
  id:number;
  url:string;
  leave1:leave={
    l_id:0,
    l_name:null,
    no_of_days:null
  };
  ngOnInit() {
    this.ar.params.subscribe(params =>{
      this.id= +params['id'];
      });
      this.leavedata.getLeave(this.id).subscribe(
        e1 => this.leave1 = e1
      );
      this.url=`https://localhost:44397/api/LeaveDetails/${this.id}`;
  }
  
  editLeave(){
    this.http.put(this.url, JSON.stringify(this.leave1),{headers: new HttpHeaders({'Content-Type': 'application/json'})}).subscribe(
      ()=>{
        return this.leavedata.getLeaves();
      }
    );
    this.route.navigate(['/adminDashboard/leaveList']);
  }

}
