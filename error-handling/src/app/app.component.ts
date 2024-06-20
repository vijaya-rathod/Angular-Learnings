import { Component } from '@angular/core';
import { EmployeeService } from './employee.service';
import { IEmployee } from './dataStructure';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'error-handling';
  errorMessage:any;
  employeeDetails!:IEmployee[];
  constructor(private _empService:EmployeeService){
      _empService.getEmployeeDetails().subscribe(data=>this.employeeDetails=data,error=>this.errorMessage=error)
  }
}
