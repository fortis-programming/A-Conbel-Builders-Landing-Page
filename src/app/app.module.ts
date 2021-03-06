import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FeaturesComponent } from './home/features/features.component';
import { FeatureItemsComponent } from './home/features/feature-items/feature-items.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectItemComponent } from './projects/project-item/project-item.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ServicesPageComponent } from './services-page/services-page.component';
import { ProjectPreviewComponent } from './project-preview/project-preview.component';
import { ServiceItemComponent } from './services-page/service-item/service-item.component';
import { SocialProofComponent } from './social-proof/social-proof.component';
import { AccordionItemComponent } from './services-page/accordion-item/accordion-item.component';
import { BannerComponent } from './banner/banner.component';
import { ProjectBannerComponent } from './project-banner/project-banner.component';

import { firebaseConfig } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AccordionItemComponent,
    BannerComponent,
    ContactUsComponent,
    FeaturesComponent,
    FeatureItemsComponent,
    HomeComponent,
    ProjectsComponent,
    ProjectItemComponent,
    ProjectsPageComponent,
    ProjectPreviewComponent,
    ProjectBannerComponent,
    ServicesPageComponent,
    ServiceItemComponent,
    SocialProofComponent,
  ],
  imports: [AppRoutingModule, BrowserModule, FormsModule, RouterModule, HttpClientModule],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
