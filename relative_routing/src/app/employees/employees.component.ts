import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
export class EmployeesComponent {
  allEmployees=[
    {name:'suhani',id:1},
    {name:'drake',id:2},
    {name:'uttara',id:3},
  ]
  constructor(private route:Router,private router:ActivatedRoute){}
  goTo(empId:any){
    this.route.navigate([empId],{relativeTo:this.router})
  }
}
