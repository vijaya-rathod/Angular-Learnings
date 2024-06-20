import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from './dataStructure';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }
  getEmployees():Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>("https://jsonplaceholder.typicode.com/posts")
  }
}
