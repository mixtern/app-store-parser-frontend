import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LandingComponent } from './landing/landing.component';
import { LandingHeaderComponent } from './landing/header/header.component';

import { ReviewsComponent } from './main/reviews/reviews.component';

@NgModule({
  declarations: [		
    AppComponent,
      LandingComponent,
      LandingHeaderComponent,
      ReviewsComponent
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
