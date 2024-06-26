import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  constructor(private route:Router,private active:ActivatedRoute){}
  goCars(){
    this.route.navigate(['cars'],{relativeTo:this.active})
  }
  goCloths(){
    this.route.navigate(['cloths'],{relativeTo:this.active})
  }

}
