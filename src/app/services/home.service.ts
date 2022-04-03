import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseResponse } from '../_shared/models/baseResponse.model';
import { FeatureModel } from '../_shared/models/feature.model';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}

  getFeatures(): Observable<BaseResponse<FeatureModel[]>> {
    return this.http.get<BaseResponse<FeatureModel[]>>('../../assets/mocks/feature.json');
  }
}
