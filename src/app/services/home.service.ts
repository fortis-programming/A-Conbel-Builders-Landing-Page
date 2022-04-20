import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { BaseResponse } from '../_shared/models/baseResponse.model';
import { FeatureModel } from '../_shared/models/feature.model';
import { ServiceModel } from '../_shared/models/service.model';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}

  getFeatures(): Observable<BaseResponse<FeatureModel[]>> {
    return this.http.get<BaseResponse<FeatureModel[]>>(
      '../../assets/mocks/clients.json'
    );
  }

  getServices(): Observable<BaseResponse<ServiceModel[]>> {
    return this.http.get<BaseResponse<ServiceModel[]>>(
      '../../assets/mocks/services.json'
    );
  }
}
