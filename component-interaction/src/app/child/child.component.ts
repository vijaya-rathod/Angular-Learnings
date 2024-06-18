import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
  <!-- <h1>{{parentData}}</h1> -->
    <!-- <h1>{{parentData}}</h1> -->
  <h1>{{parentData.age}}</h1>
  <button (click)="fireEvent()">Send Event</button>
  `,
  styleUrl: './child.component.css'
})
export class ChildComponent {
@Input() public parentData:any='';
@Output() public childEvent=new EventEmitter();
fireEvent(){
  // this.childEvent.emit(2);
  // this.childEvent.emit('Hey Disney!');
}
}
