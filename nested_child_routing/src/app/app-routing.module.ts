import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EcommersComponent } from './ecommers/ecommers.component';
import { BusinessComponent } from './business/business.component';
import { TradingComponent } from './trading/trading.component';
import { AcademicsComponent } from './academics/academics.component';
import { InvestmentComponent } from './investment/investment.component';
import { StockmarketComponent } from './stockmarket/stockmarket.component';
import { TexasComponent } from './texas/texas.component';

const routes: Routes = [
  {path:'ecommers',component:EcommersComponent,children:[
    {path:'business',component:BusinessComponent,children:[
      {path:'trading',component:TradingComponent},
      {path:'academics',component:AcademicsComponent}
    ]}
  ]
  },
  {path:'investment',component:InvestmentComponent,children:[
    {path:'stockmarket',component:StockmarketComponent},
    {path:'texas',component:TexasComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
