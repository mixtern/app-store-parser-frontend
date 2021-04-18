import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Landing
import { LandingComponent } from './landing/landing.component';
import { LandingHeaderComponent } from './landing/header/header.component';

@NgModule({
  declarations: [		
    AppComponent,
      LandingComponent,
      LandingHeaderComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
