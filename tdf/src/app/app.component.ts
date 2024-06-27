import { Component } from '@angular/core';
import { Users } from './users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tdf';
  userData=new Users('suhani','suhani@gmail.com',9276352432,'female','moring',true,['react','angular'],{'street':'halia','district':'nalgonda','state':'ts'})
  getData(){
    console.log(this.userData);
  }
}
