import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './main.component';

import { MainRoutingModule } from './main-routing.module';
import { RouterModule } from '@angular/router';
import { HeaderModule } from './header/header.module';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [MainComponent, FooterComponent],
  imports: [
    CommonModule,
    HeaderModule,
    MainRoutingModule,
    RouterModule
  ]
})
export class MainModule { }
