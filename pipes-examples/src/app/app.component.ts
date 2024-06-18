import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  template: `
    <h1>{{ heading | lowercase }}</h1>
    <h2>{{ heading | uppercase }}</h2>
    <h3>{{ heading | titlecase }}</h3>
    <p>Current Date: {{ currentDate | date }}</p>
    <p>Formatted Date: {{ currentDate | date:'fullDate' }}</p>
    <p>Price: {{ price | currency }}</p>
    <p>Price (GBP): {{ price | currency:'GBP' }}</p>
    <p>Discount: {{ discount | percent }}</p>
    <p>Slice of Heading: {{ heading | slice:0:5 }}</p>
    <p>Object in JSON: {{ obj | json }}</p>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes-examples';
  heading = 'All is well';
  currentDate = new Date();
  price = 1234.56;
  discount = 0.25;
  obj = { name: 'Angular', version: 12 };
}
