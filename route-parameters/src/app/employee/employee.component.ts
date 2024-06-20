import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  allEmployees=[
    {name:'suhani',id:1},
    {name:'drake',id:2},
    {name:'rohan',id:3}
  ]
}
