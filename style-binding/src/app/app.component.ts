import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <h2 [style.color]="'blue'">Welcome to the new world</h2>
    <h2 [style.color]="errorText">Wave your hand to say 'hi'</h2>
    <h2 [style.color]="isTitle?'green':'yellow'">Let's know more about amazon forest</h2>
`,
  styles: ``
})
export class AppComponent {
  title = 'style-binding';
  errorText='red';
  isTitle=true;
}
