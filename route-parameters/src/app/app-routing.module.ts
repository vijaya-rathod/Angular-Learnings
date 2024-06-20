import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentComponent } from './department/department.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeDataComponent } from './employee-data/employee-data.component';

const routes: Routes = [
  {path:'department',component:DepartmentComponent},
  {path:'employees',component:EmployeeComponent},
  {path:'employees/:id',component:EmployeeDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
