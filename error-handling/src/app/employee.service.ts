import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { IEmployee } from './dataStructure';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private http:HttpClient) { }
  getEmployeeDetails():Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>("https://jsonplaceholder.typicode.com/pos").pipe(catchError(this.errorMessage))
  }
  errorMessage(error:Error){
    return throwError(()=>new Error(error.message))
  }
}
