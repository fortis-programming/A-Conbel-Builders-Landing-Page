import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from '../services/projects.service';
import { ProjectsModel } from '../_shared/models/projects.model';

import * as AOS from 'aos';

@Component({
  selector: 'app-project-preview',
  templateUrl: './project-preview.component.html',
  styleUrls: ['./project-preview.component.scss'],
})
export class ProjectPreviewComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectsService
  ) {}

  projectId = '';
  projectList: ProjectsModel[] = [];
  ngOnInit(): void {
    AOS.init();

    this.route.paramMap.subscribe((params) => {
      this.projectId = JSON.stringify(params.get('id'));
    });

    this.projectService.getProjects().subscribe((response) => {
      this.projectList = response.data;
    });

    setTimeout(() => {
      this.getProjectDetails();
    }, 200);
  }

  projectDetails: ProjectsModel = {
    id: '',
    title: '',
    description: '',
    image: '',
    location: '',
    projectDuration: '',
    serviceProvided: [],
  };

  getProjectDetails(): void {
    this.projectDetails = this.projectList.filter(
      (project: ProjectsModel) => project.id === JSON.parse(this.projectId)
    )[0];
  }
}
