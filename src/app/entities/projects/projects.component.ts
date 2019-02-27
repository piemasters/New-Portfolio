import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';

import { Project } from '../../shared/models/project.model';
import * as fromProjects from '../../store/projects/projects.reducers';
import * as ProjectsActions from '../../store/projects/projects.actions';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-project',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit  {
  projects$: Observable<Project[]>;
  projectsPage$: Observable<number>;
  itemsPerPage = 3;

  constructor(
    private store: Store<fromProjects.State>,
  ) { }

  ngOnInit() {
    this.projects$ = this.store.pipe(
      select('projects'),
      map(p => p.projectList)
    );
    this.projectsPage$ = this.store.pipe(
      select('projects'),
      map(p => p.projectsPage)
    );
  }

  changePage(newPage) {
    this.store.dispatch(new ProjectsActions.SetProjectsPage(newPage));
  }
}
