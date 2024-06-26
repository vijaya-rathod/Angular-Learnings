import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'nested_child_routing';
  constructor(private route:Router,private active:ActivatedRoute){}
  goInvestment(){
    this.route.navigate(['investment'],{relativeTo:this.active})
  }
  goEcommerce(){
    this.route.navigate(['ecommers'],{relativeTo:this.active})
  }
}
