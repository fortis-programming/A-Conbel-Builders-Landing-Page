import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FeaturesComponent } from './home/features/features.component';
import { FeatureItemsComponent } from './home/features/feature-items/feature-items.component';

import { firebaseConfig } from 'src/environments/environment';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectItemComponent } from './projects/project-item/project-item.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ServicesPageComponent } from './services-page/services-page.component';
import { ProjectPreviewComponent } from './project-preview/project-preview.component';
import { ServiceItemComponent } from './services-page/service-item/service-item.component';

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    FeaturesComponent,
    FeatureItemsComponent,
    ProjectsComponent,
    ProjectItemComponent,
    ProjectsPageComponent,
    ProjectPreviewComponent,
    ContactUsComponent,
    ServicesPageComponent,
    ServiceItemComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: LocationStrategy, useClass: HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
