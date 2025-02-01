import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContractComponent } from './contract/contract.component';
import { ProductCetegoryComponent } from './product-cetegory/product-cetegory.component';
import { BuyerListComponent } from './buyer-list/buyer-list.component';
import { FarmerListComponent } from './farmer-list/farmer-list.component';
import { MrkPriceComponent } from './mrk-price/mrk-price.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminNavComponent } from './admin-nav/admin-nav.component';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    HomeComponent,
    AboutComponent,
    ContractComponent,
    ProductCetegoryComponent,
    BuyerListComponent,
    FarmerListComponent,
    MrkPriceComponent,
    AdminNavComponent,
   
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AdminModule { }
