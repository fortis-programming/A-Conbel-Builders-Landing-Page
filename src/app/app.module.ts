import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { FeaturesComponent } from './home/features/features.component';
import { FeatureItemsComponent } from './home/features/feature-items/feature-items.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    FeaturesComponent,
    FeatureItemsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
