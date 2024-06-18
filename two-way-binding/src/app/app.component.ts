import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  template: `
    <input value='Disney' [(ngModel)]='cartoonChannel'>
    {{cartoonChannel}}
  `,
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  title = 'two-way-binding';
  cartoonChannel=''
}
