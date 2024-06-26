import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrl: './business.component.css'
})
export class BusinessComponent {
  constructor(private route:Router,private active:ActivatedRoute){}
  goTrading(){
    this.route.navigate(['trading'],{relativeTo:this.active})
  }
  goAcademics(){
    this.route.navigate(['academics'],{relativeTo:this.active})
  }
}
