import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseResponse } from '../_shared/models/baseResponse.model';
import { ServiceModel } from '../_shared/models/service.model';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  constructor(private http: HttpClient) {}

  getCompanyServices(): Observable<BaseResponse<ServiceModel[]>> {
    return this.http.get<BaseResponse<ServiceModel[]>>(
      '../../assets/mocks/services.json'
    );
  }
}
