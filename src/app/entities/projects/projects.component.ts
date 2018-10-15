import { Component, OnInit } from '@angular/core';
import { Project } from './project.model';
import { ProjectsService } from './projects.service';

@Component({
  selector: 'app-project',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  itemsPerPage = 6;
  page = 1;

  constructor(
    private projectsService: ProjectsService
  ) { }

  ngOnInit() {
    this.projects =  this.projectsService.getProjects();
  }

}
