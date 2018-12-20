import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ProjectsService } from '../../../shared/services/projects.service';
import { TechnologiesService } from '../../../shared/services/technologies.service';
import { Project } from '../../../shared/models/project.model';
import { Technology } from '../../../shared/models/technology.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  id: number;
  project: Project;
  technologies: Technology[] = [];

  constructor(
    private route: ActivatedRoute,
    private projectsService: ProjectsService,
    private techService: TechnologiesService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.projectsService.getProject(+params['id']).subscribe((project) => {
          this.project = project;
          this.techService.getTechnologies().subscribe((tech) => {
            this.getTechList(tech, project.technologies);
          });
        });
      }
    );

  }
  getTechList(techList, projectList) {
    for (const item of projectList) {
      this.technologies.push(
        techList.find( (p) => {
          return p.id === item;
        }
      ));
    }
  }

}
