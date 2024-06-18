import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
  <input type="text" value="Disney" #cartoonChannel>
  {{cartoonChannel.value}}
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'template-ref-variables';
}
