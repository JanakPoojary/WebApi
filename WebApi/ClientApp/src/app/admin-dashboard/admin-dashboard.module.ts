import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { RouterModule } from '@angular/router';
import { EmployeeAddComponent } from '../employee/employee-add/employee-add.component';
import { EmployeeListComponent } from '../employee/employee-list/employee-list.component';
import { EmployeeEditComponent } from '../employee/employee-edit/employee-edit.component';
import { EmployeeFilterPipe } from '../employee/employee-filter.pipe';
import { FormsModule } from '@angular/forms';
import { LeaveAddComponent } from '../leave/leave-add/leave-add.component';
import { LeaveListComponent } from '../leave/leave-list/leave-list.component';
import { EmpleaveListComponent } from '../empleave/empleave-list/empleave-list.component';
import { EmpleaveFilterPipe } from '../empleave/empleave-filter.pipe';
import { AdminAuthGuard } from '../login/admin-login/admin-auth.guard';
import { LeaveEditComponent } from '../leave/leave-edit/leave-edit.component';



@NgModule({
  declarations: [
    AdminDashboardComponent,
    EmployeeAddComponent,
    EmployeeEditComponent,
    EmployeeListComponent,
    EmployeeFilterPipe,
    LeaveAddComponent,
    LeaveListComponent,
    LeaveEditComponent,
    EmpleaveListComponent,
    EmpleaveFilterPipe,

    
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
        { path: 'adminDashboard', component: AdminDashboardComponent,children:[
        {path:'',redirectTo:'employeeList',pathMatch:'full'},
        { path: 'employeeAdd', component: EmployeeAddComponent },
        { path: 'employeeList', component: EmployeeListComponent },
        { path: 'employeeEdit/:id', component: EmployeeEditComponent },
        { path: 'leaveAdd', component: LeaveAddComponent },
        { path: 'leaveList', component: LeaveListComponent },
        { path: 'leaveEdit/:id', component: LeaveEditComponent },
        { path: 'empleaveList', component: EmpleaveListComponent },
    ] }
    ],)
  ]
})
export class AdminDashboardModule { }
