import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  // template: '<div>Lorem Ipsum</div>',
  template:`<div>
    <h2>The great heading</h2>
    <p>Context related to the heading</p>
  </div>`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'template-html';
}
