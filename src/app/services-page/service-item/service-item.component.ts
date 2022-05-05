import { Component, Input, OnInit } from '@angular/core';
import { ServiceModel } from 'src/app/_shared/models/service.model';

@Component({
  selector: 'app-service-item',
  templateUrl: './service-item.component.html',
  styleUrls: ['./service-item.component.scss'],
})
export class ServiceItemComponent implements OnInit {
  @Input() service: ServiceModel = {
    id: '',
    title: '',
    serviceItems: []
  };

  constructor() {}

  ngOnInit(): void {
    return;
  }
}
