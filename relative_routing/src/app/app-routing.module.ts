import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { DepartmentsComponent } from './departments/departments.component';
import { OneEmployeeComponent } from './one-employee/one-employee.component';

const routes: Routes = [
  {path:'employees',component:EmployeesComponent},
  {path:'employees/:id',component:OneEmployeeComponent},
  {path:'departments',component:DepartmentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
