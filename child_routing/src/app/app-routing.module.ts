import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ClothsComponent } from './cloths/cloths.component';
import { CarsComponent } from './cars/cars.component';
import { TransactionsComponent } from './transactions/transactions.component';

const routes: Routes = [
  {path:'products',component:ProductsComponent,children:[
    {path:'cloths',component:ClothsComponent},
    {path:'cars',component:CarsComponent}
  ]},
  {path:'transactions',component:TransactionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
