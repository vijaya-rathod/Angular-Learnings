import { Component } from '@angular/core';
import { EmployeeService } from './employee.service';
import { IEmployee } from './dataStructure';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'http-crud';
  showDetails='';
  setOption(option:string){
    this.showDetails=option;
  }
 
  public TitleValue='';
  public BodyValue='';
  public UserIdValue!:number;
  employeeData!:IEmployee[];
  postResponse!:any;
  putResponse!:any;
  patchResponse!:any;
  deleteResponse!:any;
  Id!:number;
  constructor(private _getDetails:EmployeeService){
    _getDetails.getDetails().subscribe(data=>this.employeeData=data)
  }
    submitPOST(){
      this._getDetails.postDetails([{userId:this.UserIdValue,title:this.TitleValue,body:this.BodyValue}]).subscribe(data=>this.postResponse=data);
  }
  submitPUT(){
    this._getDetails.putDetails([{userId:this.UserIdValue,title:this.TitleValue,body:this.BodyValue,id:this.Id}]).subscribe(data=>this.putResponse=data);
  }
  submitPATCH(){
    this._getDetails.patchDetails([{title:this.TitleValue}]).subscribe(data=>this.patchResponse=data);
  }
  doDelete(){
    this._getDetails.deleteDetails().subscribe(data=>this.deleteResponse=data);
  }
}

