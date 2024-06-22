import { Component } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
export class EmployeesComponent {
  allEmployess=[
    {name:'suhani',id:1},
    {name:'drake',id:2},
    {name:'rohan',id:3},
    {name:'rohit',id:4}
  ]
}
