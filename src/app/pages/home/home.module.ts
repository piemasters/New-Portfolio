import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { CommonModule } from '@angular/common';
import { ProjectsModule } from '../../entities/projects/projects.module';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    ProjectsModule,
    HomeRoutingModule
  ]
})
export class HomeModule {}
