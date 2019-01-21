import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';

import { Project } from '../../../shared/models/project.model';
import { Technology } from '../../../shared/models/technology.model';
import * as fromProjects from '../../../store/projects/projects.reducers';
import * as ProjectsActions from '../../../store/projects/projects.actions';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: [ './project.component.scss' ]
})
export class ProjectComponent implements OnInit {
  project: Project;
  technologies: Technology[] = [];

  constructor(
    private route: ActivatedRoute,
    private store: Store<fromProjects.State>,
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {

        this.store.dispatch(new ProjectsActions.SetSelectedProjectId(Number(params[ 'id' ])));
        this.store.dispatch(new ProjectsActions.FetchSelectedProject());
        this.store.select('projects').subscribe(projects => {
          if (projects.selectedProject && projects.selectedProject.technologies) {
            this.getTechList(projects.technologyList, projects.selectedProject.technologies);
          }
          return this.project = projects.selectedProject;
        });
      }
    );
  }

  getTechList(techList, projectList) {
    for (const item of projectList) {
      this.technologies.push(
        techList.find((p) => {
            return p.id === item;
          }
        ));
    }
  }

}
