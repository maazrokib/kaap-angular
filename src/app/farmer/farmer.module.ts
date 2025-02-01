import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FarmerRoutingModule } from './farmer-routing.module';
import { FarmerDashboardComponent } from './farmer-dashboard/farmer-dashboard.component';
import { ArgInfoComponent } from './arg-info/arg-info.component';
import { PdeleveryListComponent } from './pdelevery-list/pdelevery-list.component';
import { FarmingStoryComponent } from './farming-story/farming-story.component';
import { ProfileComponent } from './profile/profile.component';
import { OrderListComponent } from './order-list/order-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PCreateComponent } from './p-create/p-create.component';
import { PEditComponent } from './p-edit/p-edit.component';
import { PListComponent } from './p-list/p-list.component';
import { FarmerNavComponent } from './farmer-nav/farmer-nav.component';
import { HomeComponent } from './home/home.component';
import { PcFarmerComponent } from './pc-farmer/pc-farmer.component';



@NgModule({
  declarations: [
    FarmerDashboardComponent,
    ArgInfoComponent,
    PdeleveryListComponent,
    FarmingStoryComponent,
    ProfileComponent,
    OrderListComponent,
    PCreateComponent,
    PEditComponent,
    PListComponent,
    FarmerNavComponent,
    HomeComponent,
    PcFarmerComponent,
  ],
  imports: [
    CommonModule,
    FarmerRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
})
export class FarmerModule {}
