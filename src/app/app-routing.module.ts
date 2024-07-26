import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { ImpcustomerComponent } from './impcustomer/impcustomer.component';
import { SalesComponent } from './sales/sales.component';
import { ExchangeComponent } from './exchange/exchange.component';


const routes: Routes = [
  {path:"home",component:HomeComponent },
  {path:"service",component:ServiceComponent },
  {path:"impcustomer",component:ImpcustomerComponent },
  {path:"sales",component:SalesComponent },
  {path:"exchange",component:ExchangeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
