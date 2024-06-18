import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h2>Working on ngIf</h2>
  <div>
    <input *ngIf="showInput">
    <input *ngIf="showSecondInput;else elseText">
    <input *ngIf="showThirdInput;then thenCase;else elseText">
    <ng-template #elseText>
      <p>Else text</p>
    </ng-template>
    <ng-template #thenCase>Then text</ng-template>
</div>
  <h2>Working on ngSwitch</h2>
  <div [ngSwitch]="pickedColor">
    <div *ngSwitchCase="'red'">You picked red</div>
    <div *ngSwitchCase="'yellow'">You picked yellow</div>
    <div *ngSwitchCase="'blue'">You picked blue</div>
  </div>
  <h2>Working on ngFor</h2>
  <div *ngFor="let color of colors;first as f;last as l;index as i;even as e;odd as o">
   color:{{color}} isFirst:{{f}} isLast:{{l}} index:{{i}} isEven:{{e}} isOdd:{{o}}
  </div>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'structural-directives';
  showInput=true;
  showSecondInput=false;
  showThirdInput=true;
  pickedColor='red';
  colors=['white','green','purple']
}
