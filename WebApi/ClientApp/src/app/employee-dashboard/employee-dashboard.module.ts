import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeProfileComponent } from '../employee-profile/employee-profile.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EmployeeDashboardComponent } from './employee-dashboard.component';
import { TakeLeaveComponent } from '../take-leave/take-leave.component';
import { EmployeeAuthGuard } from '../login/employee-login/employee-auth.guard';
import { TakeLeaveListComponent } from '../take-leave/take-leave-list/take-leave-list.component';
import { EmployeeProfileEditComponent } from '../employee-profile/employee-profile-edit/employee-profile-edit.component';



@NgModule({
  declarations: [
    EmployeeDashboardComponent,
    EmployeeProfileComponent,
    TakeLeaveComponent,
    TakeLeaveListComponent,
    EmployeeProfileEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: 'employeeDashboard', component: EmployeeDashboardComponent,
    canActivate: [EmployeeAuthGuard],
    children:[
      {path:'',redirectTo:'employeeProfile',pathMatch:'full'},
      { path: 'employeeProfile', component: EmployeeProfileComponent },
      { path: 'takeLeave', component: TakeLeaveComponent },
      {path:'takeLeaveList', component: TakeLeaveListComponent},
      {path:'employeeProfileEdit/:id', component: EmployeeProfileEditComponent}
      ] },
    ])
  ]
})
export class EmployeeDashboardModule { }
