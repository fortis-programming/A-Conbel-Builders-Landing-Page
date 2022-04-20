import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { HomeService } from '../services/home.service';
import { ServiceModel } from '../_shared/models/service.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private homeService: HomeService) {}

  servicesList: ServiceModel[] = [];
  ngOnInit(): void {
    AOS.init();
    this.homeService.getServices().subscribe((response) => {
      this.servicesList = response.data;
    });
  }
}
