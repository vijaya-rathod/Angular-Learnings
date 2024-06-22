import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css'
})
export class EmployeeDetailsComponent implements OnInit {
  optionalData:any;
  optionalId:any;
  constructor(private route:ActivatedRoute){}
    // this.optionalData=this.route.snapshot.paramMap.get('secret');
  
ngOnInit(): void {
  this.route.paramMap.subscribe(data=>this.optionalData=data.get('secret'));
  this.route.paramMap.subscribe(data=>this.optionalId=data.get('id'));
}
}
