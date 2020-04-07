import { Component, OnInit } from '@angular/core';
import { leave } from '../leave.model';
import { LeaveDataService } from '../leave-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leave-add',
  templateUrl: './leave-add.component.html',
  styleUrls: ['./leave-add.component.css']
})
export class LeaveAddComponent implements OnInit {
  constructor(private leavedata:LeaveDataService, private route:Router) { 
  }
  leave1:leave={
    l_id:0,
    l_name:null,
    no_of_days:null
  };
  
  
  ngOnInit(): void {
    
  }
  
  add(){
    this.leavedata.addLeave(this.leave1);
    this.route.navigate(['/adminDashboard/leaveList']);
  }
}
