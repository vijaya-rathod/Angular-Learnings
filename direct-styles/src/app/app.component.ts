import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<div>
    <h2 class="red-text">Welcome First</h2>
    <h2 [class]='SuccessText'>Welocme Second</h2>
  
  </div>`,
  styles: `
  .red-text {
    color:red;
  }
  .green-text {
    color:green;
  }
 `
})
export class AppComponent {
  title = 'direct-styles';
  public SuccessText='green-text';
}
