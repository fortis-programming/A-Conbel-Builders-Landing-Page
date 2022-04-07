import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';

import { route as HomeRoute } from '../home/home-route.module';
import { route as AboutRoute } from '../about/about-route.module';
import { route as ProjectsRoute } from '../projects-page/projects-page-route.module';
import { route as ServiceRoute } from '../service-page/service-page-route.module';

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
      ...HomeRoute,
      ...AboutRoute,
      ...ProjectsRoute,
      ...ServiceRoute,
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class MainRoutingModule {}
