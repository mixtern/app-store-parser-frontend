import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LandingComponent } from './landing/landing.component';
import { LandingHeaderComponent } from './landing/header/header.component';

import { ReviewsComponent } from './main/reviews/reviews.component';
import { AppConfigModalComponent } from './main/reviews/app-config-modal/app-config-modal.component';
import { MainHeaderComponent } from './main/reviews/header/header.component';
import { ReviewsBlockComponent } from './main/reviews/reviews-block/reviews-block.component';

@NgModule({
  declarations: [		
    AppComponent,
      LandingComponent,
      LandingHeaderComponent,
      
      ReviewsComponent,
      AppConfigModalComponent,
      MainHeaderComponent,
      ReviewsBlockComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
