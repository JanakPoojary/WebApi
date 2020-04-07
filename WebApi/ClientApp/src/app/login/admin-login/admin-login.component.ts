import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  email:string;
  message:string=null;
  constructor(private Auth:AuthService, private router: Router) { }
  ngOnInit() {
    
  }
  login(){
    this.Auth.givenEmail=this.email;
    this.router.navigate(['/adminDashboard']);
    if(this.email!='admin@gmail.com'){
      this.message="This is not the correct Admin Email Id";
    }
}
}
