import { Component, Input, OnInit } from '@angular/core';
import { ServiceModel } from 'src/app/_shared/models/service.model';

@Component({
  selector: 'app-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.scss'],
})
export class AccordionItemComponent implements OnInit {
  @Input() item: ServiceModel = {
    id: '',
    title: '',
    description: '',
    img: '',
  };

  constructor() {}

  ngOnInit(): void {
    return;
  }
}
