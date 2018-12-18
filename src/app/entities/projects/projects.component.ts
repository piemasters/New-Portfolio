import { Component, OnInit } from '@angular/core';

import { Project } from '../../shared/models/project.model';
import { ProjectsService } from '../../shared/services/projects.service';

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
    this.projectsService.getProjects().subscribe((data) => {
      this.projects = data;
    });
  }

}
