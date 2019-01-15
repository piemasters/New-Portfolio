import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { map, switchMap, withLatestFrom } from 'rxjs/operators';

import * as fromProjects from './projects.reducers';
import * as ProjectsActions from './projects.actions';
import { Project } from '../../shared/models/project.model';

@Injectable()
export class ProjectsEffects {
  constructor(private actions$: Actions, private httpClient: HttpClient, private store: Store<fromProjects.State>) {
  }

  @Effect()
  projectsFetch = this.actions$
    .pipe(
      ofType(ProjectsActions.FETCH_PROJECTS),
      withLatestFrom(this.store.select('projects')),
      switchMap(([ action, state ]) => {
        return this.httpClient.get<Project[]>('./assets/data/projects.json', {
          observe: 'body',
          responseType: 'json'
        });
      }),
      map(
        (projectsResponse) => {
          return {
            type: ProjectsActions.SET_PROJECTS,
            payload: projectsResponse
          };
        }
      )
    );
}
