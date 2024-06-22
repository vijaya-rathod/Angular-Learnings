import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEmployee,patchStructure,postStructure } from './dataStructure';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  
  constructor(private http:HttpClient) { }
  getDetails():Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>("https://jsonplaceholder.typicode.com/posts")
  }
  postDetails(employee:Partial<postStructure[]>):Observable<postStructure[]>{
    return this.http.post<postStructure[]>("https://jsonplaceholder.typicode.com/posts",employee);
  }
  putDetails(employee:Partial<IEmployee[]>):Observable<IEmployee[]>{
    return this.http.put<IEmployee[]>("https://jsonplaceholder.typicode.com/posts/1",employee);
  }
  patchDetails(employee:Partial<patchStructure[]>):Observable<IEmployee[]>{
    return this.http.patch<IEmployee[]>("https://jsonplaceholder.typicode.com/posts/1",employee)
  }
  deleteDetails(){
    return this.http.delete('https://jsonplaceholder.typicode.com/posts/1')
  }
}