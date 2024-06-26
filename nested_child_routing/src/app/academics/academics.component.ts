import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-academics',
  templateUrl: './academics.component.html',
  styleUrl: './academics.component.css'
})
export class AcademicsComponent {
  constructor(private route:Router,private active:ActivatedRoute){}
  back(){
    this.route.navigate(['../'])
  }
backOne(){
  this.route.navigate(['../'],{relativeTo:this.active})
}
doubleBack(){
  this.route.navigate(['../../'],{relativeTo:this.active})
}
neighborParent(){
  this.route.navigate(['../investment'])

}
sibling(){
  this.route.navigate(['../investment/texas']);
}
}
