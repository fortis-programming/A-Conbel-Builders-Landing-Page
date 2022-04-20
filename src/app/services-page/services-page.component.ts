import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/services.service';
import { ServiceModel } from '../_shared/models/service.model';

import * as AOS from 'aos';

@Component({
  selector: 'app-services-page',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.scss']
})
export class ServicesPageComponent implements OnInit {

  constructor(
    private servicesService: ServicesService
  ) { }

  servicesList: ServiceModel[] = [];
  ngOnInit(): void {
    AOS.init();
    this.servicesService.getCompanyServices().subscribe((response) => {
      this.servicesList = response.data;
    })
  }

}
