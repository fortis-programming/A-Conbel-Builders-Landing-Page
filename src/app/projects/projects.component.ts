import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../services/projects.service';
import { ProjectsModel } from '../_shared/models/projects.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor(
    private projectService: ProjectsService
  ) { }

  projects: ProjectsModel[] = [];
  ngOnInit(): void {
    this.projectService.getProjects().subscribe(response => {
      this.projects = response.data
    })
  }

}
