import { Directive,HostListener, input } from '@angular/core';

@Directive({
  selector: '[appPatternMatch]'
})
export class PatternMatchDirective {

  constructor() { }
@HostListener("input", ["$event"])
onInput(e:any){
  var count:{[key:string]:number}={};
  for(let i of e.target.value){
    console.log(i);
    if(i in count){
      count[i]=count[i]+1
    }
    else{
      count[i]=1;
    }
  }
  console.log(count,"changed");
  
}
}
