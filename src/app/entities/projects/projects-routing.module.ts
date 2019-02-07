import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProjectsComponent } from './projects.component';
import { ProjectComponent } from './project/project.component';

const projectsRoutes: Routes = [
  { path: 'projects', component: ProjectsComponent },
  { path: 'projects/:id', component: ProjectComponent },
  { path: '**', redirectTo: 'page-not-found'} // Ensure this is the last path
];

@NgModule({
  imports: [
    RouterModule.forChild(projectsRoutes)
  ],
  exports: [RouterModule]
})
export class ProjectsRoutingModule {}
