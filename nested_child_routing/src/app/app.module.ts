import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EcommersComponent } from './ecommers/ecommers.component';
import { TradingComponent } from './trading/trading.component';
import { AcademicsComponent } from './academics/academics.component';
import { BusinessComponent } from './business/business.component';
import { InvestmentComponent } from './investment/investment.component';
import { StockmarketComponent } from './stockmarket/stockmarket.component';
import { TexasComponent } from './texas/texas.component';

@NgModule({
  declarations: [
    AppComponent,
    EcommersComponent,
    TradingComponent,
    AcademicsComponent,
    BusinessComponent,
    InvestmentComponent,
    StockmarketComponent,
    TexasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
