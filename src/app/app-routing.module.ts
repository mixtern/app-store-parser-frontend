import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { ReviewsComponent } from './main/reviews/reviews.component';

const routes: Routes = [
  { path: 'reviews', component: ReviewsComponent },
  { path: '', pathMatch: 'full', component: LandingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
