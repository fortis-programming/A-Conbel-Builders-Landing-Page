import { Component, OnInit, Input } from '@angular/core';
import { FeatureModel } from 'src/app/_shared/models/feature.model';

@Component({
  selector: 'app-feature-items',
  templateUrl: './feature-items.component.html',
  styleUrls: ['./feature-items.component.scss'],
})
export class FeatureItemsComponent implements OnInit {
  @Input() feature: FeatureModel = {
    icon: '',
  };

  constructor() {}

  ngOnInit(): void {
    return;
  }
}
