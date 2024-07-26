import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { ImpcustomerComponent } from './impcustomer/impcustomer.component';
import { SalesComponent } from './sales/sales.component';
import { ExchangeComponent } from './exchange/exchange.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ServiceComponent,
    ImpcustomerComponent,
    SalesComponent,
    ExchangeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
