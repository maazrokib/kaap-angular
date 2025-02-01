import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; // RouterModule ইমপোর্ট করা হয়েছে
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './auth/home/home.component';
import { MyproductComponent } from './auth/myproduct/myproduct.component';
import { NavbarComponent } from './auth/navbar/navbar.component';
import { PCetegoryComponent } from './auth/p-cetegory/p-cetegory.component';
import { GelleryComponent } from './auth/gellery/gellery.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Default route
  { path: 'home', component:HomeComponent  },
  { path: 'login', component:LoginComponent}, // Login route
  { path: 'sign-up', component: SignUpComponent }, // Sign-up route
  { path: 'product', component: MyproductComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'p-category', component: PCetegoryComponent },
  { path: 'gellery', component: GelleryComponent },
  {
    path: 'buyer',
    loadChildren: () =>
      import('./buyer/buyer.module').then((m) => m.BuyerModule), // Lazy loading for Buyer module
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule), // Lazy loading for Admin module
  },
  {
    path: 'farmer',
    loadChildren: () =>
      import('./farmer/farmer.module').then((m) => m.FarmerModule), // Lazy loading for Farmer module
  },
  { path: '**', redirectTo: 'sign-up' }, // Wildcard route for undefined paths

];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // RouterModule.forRoot(routes) যুক্ত করা হয়েছে
  exports: [RouterModule], // RouterModule এক্সপোর্ট করা হয়েছে
})
export class AppRoutingModule {}


