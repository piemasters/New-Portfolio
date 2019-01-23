import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { select, Store } from '@ngrx/store';

import { Project } from '../../../shared/models/project.model';
import { Technology } from '../../../shared/models/technology.model';
import * as fromProjects from '../../../store/projects/projects.reducers';
import * as ProjectsActions from '../../../store/projects/projects.actions';
import { Observable } from 'rxjs/internal/Observable';
import { Projects } from '@angular/cli/lib/config/schema';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: [ './project.component.scss' ]
})
export class ProjectComponent implements OnInit {
  project: Project;
  technologies: Technology[] = [];
  projects$: Observable<Projects[]>;

  constructor(
    private route: ActivatedRoute,
    private store: Store<fromProjects.State>) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
        this.store.dispatch(new ProjectsActions.SetSelectedProjectId(Number(params[ 'id' ])));
        this.store.dispatch(new ProjectsActions.FetchSelectedProject());
        this.store.dispatch(new ProjectsActions.FetchProjectTechnologies());
        this.projects$ = this.store.pipe(select('projects'));
      }
    );
  }

}
