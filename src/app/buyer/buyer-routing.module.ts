import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyerDashboardComponent } from './buyer-dashboard/buyer-dashboard.component';
import { FeedbackStoryComponent } from './feedback-story/feedback-story.component';
import { OrderListComponent } from './order-list/order-list.component';
import { ProfileComponent } from './profile/profile.component';
import { BuyerNavComponent } from './buyer-nav/buyer-nav.component';
import { HomeBuyerComponent } from './home-buyer/home-buyer.component';
import { BuyerComponent } from './buyer.component';

const routes: Routes = [
  { path: '', redirectTo: 'buyer-dashboard', pathMatch: 'full' }, // Default route
  { path: 'buyer-dashboard', component: BuyerDashboardComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'order-list', component: OrderListComponent },
  { path: 'feedback-story', component: FeedbackStoryComponent },
  { path: 'BuyerComponent', component: BuyerComponent },
  { path: 'home', component: HomeBuyerComponent },
  { path: 'buyer', component: BuyerComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuyerRoutingModule { }
