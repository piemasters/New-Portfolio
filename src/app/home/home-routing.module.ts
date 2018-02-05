import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { ProjectsComponent } from '../entities/projects/projects.component';

const homeRoutes: Routes = [
  { path: '', component: HomeComponent, children: [
      {path: '', component: ProjectsComponent, outlet: 'projects'}
    ] }
];

@NgModule({
  imports: [
    RouterModule.forChild(homeRoutes)
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
