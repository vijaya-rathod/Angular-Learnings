import { Component,OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { IEmployee } from './dataStructure';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'subscribe-alternate';
  employeeDetails!:IEmployee[];
  constructor(private _employeeService:EmployeeService){}
  async ngOnInit() {
    try{
      this.employeeDetails=await firstValueFrom(this._employeeService.getEmployees())
    }
    catch(error){
      console.log("Error fetching employee details: ",error);
     
    }
  }
  
}
