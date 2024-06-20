import { Component } from '@angular/core';
import { EmployeeService } from './employee.service';
import { Observable, pipe } from 'rxjs';
import { Iemployee } from './dataStructure';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'htttp_and_observables';
  employeeDetails!: Iemployee[];
  constructor(private _employeedata:EmployeeService){
  _employeedata.getEmployees().subscribe(data=>this.employeeDetails=data)
  }
}
