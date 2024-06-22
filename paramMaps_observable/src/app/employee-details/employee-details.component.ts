import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css'
})
export class EmployeeDetailsComponent implements OnInit{
  employeeId=0;
  constructor(private route:ActivatedRoute,private routes:Router){}
  ngOnInit(): void {
    this.route.paramMap.subscribe(data=>this.employeeId=parseInt(data.get('id') ??'0'));
  }
  goPrevious(){
    this.routes.navigate(['/employees',this.employeeId-1])
  }
  goNext(){
    this.routes.navigate(['/employees',this.employeeId+1])
  }
}
