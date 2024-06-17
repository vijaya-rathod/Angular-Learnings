import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <h2>{{tagline}}</h2>
    <p>{{120+55}}</p>
    <button (click)='greet()'>Let's start</button>
    {{welcomeText}}
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'interpolation';
  public tagline='Emerge in learnings';
  public welcomeText='';
  greet(){
    this.welcomeText='Welcome to the new learnings';
  }
}
