import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { LogsComponent } from './logs/logs.component';
import { BuyComponent } from './buy/buy.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'logs', component: LogsComponent },
  { path: 'buy/:id', component: BuyComponent },
  { path: 'details/:id', component: DetailsComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
