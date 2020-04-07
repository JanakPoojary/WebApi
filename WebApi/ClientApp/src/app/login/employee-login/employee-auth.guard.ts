import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { EmployeeDataService } from 'src/app/employee/employee-data.service';
import { employee } from 'src/app/employee/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeAuthGuard implements CanActivate {
  constructor(private authService:AuthService,
    private router: Router){}
    
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkEmployee();
  }
  checkEmployee(): boolean{
    for (var i = 0; i < this.authService.elist.length; i++) {
      if(this.authService.givenEmail == this.authService.elist[i].e_email){
        this.authService.loggedInUserId=this.authService.elist[i].e_id;
        return true;
      }
    }
    this.router.navigate(['/welcome/employeeLogin']);
    return false;
  }
  
}
