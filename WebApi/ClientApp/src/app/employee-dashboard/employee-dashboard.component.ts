import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {

  constructor(private Auth:AuthService, private router: Router) { }

  ngOnInit() {
  }
  logout(){
    this.Auth.givenEmail="a";
    this.Auth.loggedInUserId=null;
    this.Auth.status=false;
    this.Auth.elist=null;
    this.router.navigate(['/welcome/employeeLogin']);
}

}
