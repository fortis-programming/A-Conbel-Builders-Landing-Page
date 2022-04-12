import { Routes } from "@angular/router";
import { ProjectPreviewComponent } from "./project-preview.component";
export const route: Routes = [
  {
    path: 'project/:id',
    component: ProjectPreviewComponent
  }
]