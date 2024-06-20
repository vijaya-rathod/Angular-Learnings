import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-data',
  templateUrl: './employee-data.component.html',
  styleUrl: './employee-data.component.css'
})
export class EmployeeDataComponent {
    empData!:any;
    constructor(private route:ActivatedRoute){
      this.empData=parseInt(this.route.snapshot.params['id']);
    }
    
}
