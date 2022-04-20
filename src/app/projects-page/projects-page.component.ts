import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../services/projects.service';
import { ProjectsModel } from '../_shared/models/projects.model';

import * as AOS from 'aos';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss'],
})
export class ProjectsPageComponent implements OnInit {
  constructor(private projectService: ProjectsService) {}

  projects: ProjectsModel[] = [];
  ngOnInit(): void {
    AOS.init();
    this.projectService.getProjects().subscribe((response) => {
      this.projects = response.data;
    });
  }
}
