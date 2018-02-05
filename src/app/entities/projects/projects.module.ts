import { NgModule } from '@angular/core';
import { ProjectsComponent } from './projects.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectComponent } from './project/project.component';
import { ProjectsService } from './projects.service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectComponent
  ],
  imports: [
    ProjectsRoutingModule,
    CommonModule
  ],
  bootstrap: [ProjectsComponent],
  providers: [
    ProjectsService
  ]
})
export class ProjectsModule {}
