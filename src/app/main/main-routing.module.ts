import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';

import { route as HomeRoute } from '../home/home-route.module';
import { route as AboutRoute } from '../about/about-route.module';
const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        redirectTo: 'about',
        pathMatch: 'full',
      },
      ...HomeRoute,
      ...AboutRoute
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class MainRoutingModule {}
