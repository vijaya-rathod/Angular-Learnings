import { Component } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'service-with-DI';
  allEmployees;
  constructor(private _employeeService:EmployeeService){
    this.allEmployees=this._employeeService.getEmployeesData()
  }
  
}
