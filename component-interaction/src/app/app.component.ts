import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-child [parentData]="solution" (childEvent)="secretCode=$event"></app-child>
  {{secretCode}}`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'component-interaction';
  // solution='1234';
  // solution=25;
  solution={id:1,age:22};
  secretCode=''
}
