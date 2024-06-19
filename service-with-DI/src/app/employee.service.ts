import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
  getEmployeesData(){
    return [
      {name:"suhani",age:25},
      {name:"drake",age:22}
    ]
  }
}
