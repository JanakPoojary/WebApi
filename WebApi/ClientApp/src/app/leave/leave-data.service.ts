import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { leave } from './leave.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LeaveDataService {

  private url = 'https://localhost:44397/api/LeaveDetails';
  
  constructor(private http: HttpClient, private route:Router) { }
  
  emp:leave;
  emplist:Observable<leave[]>;
  addLeave(e:leave):void{
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    const as=JSON.stringify(e);
    this.http.post(this.url,as,{headers: headers}).subscribe(
      ()=>{
        console.log("New leave added successfully");
        return this.getLeaves();
      }
    );
this.route.navigate(['/adminDashboard/employeeList']);
  }

  deleteLeave(id:number):void{
    if(confirm("Delete this leave?")){
      const durl=`https://localhost:44397/api/LeaveDetails/${id}`;
      this.http.delete(durl,{ responseType: 'text' }).subscribe(
        ()=>{
          console.log("One leave deleted successfully.");
          return this.getLeaves();
        }
      );
      this.route.navigate(['/adminDashboard/employeeList']);
    }
  }


  getLeaves():Observable<leave[]>{
    return this.http.get<leave[]>(this.url).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  getLeave(id:number):Observable<leave>{
    const eurl=`https://localhost:44397/api/LeaveDetails/${id}`;
    return this.http.get<leave>(eurl).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
