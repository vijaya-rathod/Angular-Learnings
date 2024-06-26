import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ecommers',
  templateUrl: './ecommers.component.html',
  styleUrl: './ecommers.component.css'
})
export class EcommersComponent {
  constructor(private route:Router,private active:ActivatedRoute){}
  goBusiness(){
    this.route.navigate(['business'],{relativeTo:this.active})
  }
  gotoStocks(){
    this.route.navigate(['../investment/stockmarket'])
  }
}
