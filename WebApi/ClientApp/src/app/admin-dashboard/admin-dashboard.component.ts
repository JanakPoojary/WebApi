import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private Auth:AuthService, private router: Router) { }

  ngOnInit() {
  }
  logout(){
    this.Auth.givenEmail="a";
    this.router.navigate(['/welcome']);
}

}
