import { NgModule } from '@angular/core';
import { ProjectsComponent } from './projects.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectComponent } from './project/project.component';
import { CommonModule } from '@angular/common';
import { CustomPipesModule } from '../../pipes/custom-pipes.module';

@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectComponent
  ],
  imports: [
    ProjectsRoutingModule,
    CommonModule,
    CustomPipesModule
  ],
  bootstrap: [ProjectsComponent]
})
export class ProjectsModule {}
