import { Injectable } from '@angular/core';
import { employee } from '../employee/employee.model';
import { EmployeeDataService } from '../employee/employee-data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  givenEmail:string;
  elist:Array<employee>;
  status:boolean;
  loggedInUserId: number;

  constructor() { }
  
  
}
