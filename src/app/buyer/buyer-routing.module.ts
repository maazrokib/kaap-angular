import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyerDashboardComponent } from './buyer-dashboard/buyer-dashboard.component';
import { FeedbackStoryComponent } from './feedback-story/feedback-story.component';
import { OrderListComponent } from './order-list/order-list.component';
import { ProfileComponent } from './profile/profile.component';
import { BuyerNavComponent } from './buyer-nav/buyer-nav.component';

const routes: Routes = [
  { path: '', redirectTo: 'buyer-dashboard', pathMatch: 'full' }, // Default route
  { path: 'buyer-dashboard', component: BuyerDashboardComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'order-list', component: OrderListComponent },
  { path: 'feedback-story', component: FeedbackStoryComponent },
  { path: 'buyer-nav', component: BuyerNavComponent },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuyerRoutingModule { }
