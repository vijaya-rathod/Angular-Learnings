import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'optional_routing_params';
  constructor(private route:Router){}
  employees=[
    {name:'suhani',id:1},
    {name:'drake',id:2},
    {name:'rahul subhramanyan',id:3}
  ]
  goto(empId:number){
    if(empId==3)
    this.route.navigate(['/employee',empId,{secret:'1234'}])
  else{
    this.route.navigate(['/employee',{id:empId}])
  }
  }
}
