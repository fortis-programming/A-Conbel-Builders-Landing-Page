import { Component, Input, OnInit } from '@angular/core';
import { ProjectsModel } from 'src/app/_shared/models/projects.model';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss'],
})
export class ProjectItemComponent implements OnInit {
  @Input() project: ProjectsModel = {
    title: '',
    description: '',
    image: '',
    location: '',
  };

  constructor() {}

  ngOnInit(): void {}
}
