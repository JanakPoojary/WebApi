import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Empleave } from './empleave.model';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { EmpleavePost } from './empleave-post.model';

@Injectable({
  providedIn: 'root'
})
export class EmpleaveDataService {
  getEmployees() {
    throw new Error("Method not implemented.");
  }

  private url = 'https://localhost:44397/api/EmpLeaves';
  
  constructor(private http: HttpClient, private route:Router) { }
  
  emp:Empleave;
  empp:EmpleavePost;
  emplist:Observable<Empleave[]>;
  addEmpLeave(e:EmpleavePost):void{
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    const as=JSON.stringify(e);
    this.http.post(this.url,as,{headers: headers}).subscribe(
      ()=>{
        return this.getEmpLeaves();
      }
    );
    this.route.navigate(['/employeeList']);
  }

  deleteEmpLeave(id:number):void{
      const durl=`https://localhost:44397/api/EmpLeaves/${id}`;
      this.http.delete(durl,{ responseType: 'text' }).subscribe(
        ()=>{
          return this.getEmpLeaves();
        }
      );
      this.route.navigate(['/employeeList']);
  }


  getEmpLeaves():Observable<Empleave[]>{
    return this.http.get<Empleave[]>(this.url).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  getEmpLeave(id:number):Observable<Empleave>{
    const eurl=`https://localhost:44397/api/EmpLeaves/${id}`;
    return this.http.get<Empleave>(eurl).pipe(
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
