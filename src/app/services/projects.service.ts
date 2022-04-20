import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseResponse } from '../_shared/models/baseResponse.model';
import { ProjectsModel } from '../_shared/models/projects.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  constructor(private http: HttpClient) {}

  getProjects(): Observable<BaseResponse<ProjectsModel[]>> {
    return this.http.get<BaseResponse<ProjectsModel[]>>(
      '../../assets/mocks/projects.json'
    );
  }
}
