import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<div>
    <input [disabled]='true' value="Angular">
    <input bind-disabled='display'>
  </div>`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'property-binding';
  display=false;
}
