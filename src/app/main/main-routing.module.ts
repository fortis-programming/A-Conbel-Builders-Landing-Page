import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';

import { route as AboutRoute } from '../about/about-route.module';
import { route as ContactUsRoute } from '../contact-us/contact-us-route.module';
import { route as HomeRoute } from '../home/home-route.module';
import { route as ProjectsRoute } from '../projects-page/projects-page-route.module';
import { route as ProjectPreviewRoute } from '../project-preview/project-preview-route.module';
import { route as ServicesPageRoute } from '../services-page/services-page-route.module';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      ...AboutRoute,
      ...ContactUsRoute,
      ...HomeRoute,
      ...ProjectsRoute,
      ...ProjectPreviewRoute,
      ...ServicesPageRoute,
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class MainRoutingModule {}
