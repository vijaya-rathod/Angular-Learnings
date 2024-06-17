import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<button (click)='getInfo($event.type)'>Click here to know more</button>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'event-binding';
  getInfo(event:any){
    console.log(event);
  }
}
