import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iemployee } from './dataStructure';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }
  getEmployees():Observable<Iemployee[]>{
    return this.http.get<Iemployee[]>("https://jsonplaceholder.typicode.com/posts")
  }
}
