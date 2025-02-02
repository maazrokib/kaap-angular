import { FarmerService } from './services/farmer.service';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArgInfoComponent } from './arg-info/arg-info.component';
import { FarmerDashboardComponent } from './farmer-dashboard/farmer-dashboard.component';
import { FarmingStoryComponent } from './farming-story/farming-story.component';
import { OrderListComponent } from './order-list/order-list.component';
import { PdeleveryListComponent } from './pdelevery-list/pdelevery-list.component';
import { ProfileComponent } from './profile/profile.component';
import { PCreateComponent } from './p-create/p-create.component';
import { PEditComponent } from './p-edit/p-edit.component';
import { PListComponent } from './p-list/p-list.component';
import { FarmerNavComponent } from './farmer-nav/farmer-nav.component';
import { HomeComponent } from './home/home.component';
import { PcFarmerComponent } from './pc-farmer/pc-farmer.component';



const routes: Routes = [
  { path: '', redirectTo: 'farmer-dashboard', pathMatch: 'full' }, // Default route
  { path: 'farmer-dashboard', component: FarmerDashboardComponent },
  { path: 'arg-info', component: ArgInfoComponent },
  { path: 'product-list', component: PListComponent },
  { path: 'pdelevery-list', component: PdeleveryListComponent },
  { path: 'farming-story', component: FarmingStoryComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'p-create', component: PCreateComponent },
  { path: 'p-edit/:id', component: PEditComponent },
  { path: 'order-list', component: OrderListComponent },
  { path: 'p-list', component: PListComponent },
   { path: 'farmer-nav', component: FarmerNavComponent },
   { path: 'home', component: HomeComponent },
   { path: 'cetegory', component: PcFarmerComponent },
  
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FarmerRoutingModule { }
