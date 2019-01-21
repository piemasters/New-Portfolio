import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, switchMap, withLatestFrom } from 'rxjs/operators';

import * as fromProjects from './projects.reducers';
import * as ProjectsActions from './projects.actions';
import { ProjectsService } from '../../shared/services/projects.service';
import { TechnologiesService } from '../../shared/services/technologies.service';

@Injectable()
export class ProjectsEffects {
  constructor(
    private actions$: Actions,
    private store: Store<fromProjects.State>,
    private projectsService: ProjectsService,
    private technologiesService: TechnologiesService) {
  }

  @Effect()
  projectsFetch = this.actions$
    .pipe(
      ofType(ProjectsActions.FETCH_PROJECTS),
      withLatestFrom(this.store.select('projects')),
      switchMap(() => this.projectsService.getProjects()),
      map(
        (projectsResponse) => {
          return {
            type: ProjectsActions.SET_PROJECTS,
            payload: projectsResponse
          };
        }
      )
    );

  @Effect()
  projectFetch = this.actions$.pipe(
    ofType(ProjectsActions.FETCH_SELECTED_PROJECT),
    withLatestFrom(this.store.select('projects')),
    map(
      ([action, state]) => state.projectList.filter(project => project.id === state.selectedProjectId)
    ),
    map( (projectResponse) => {
      return {
        type: ProjectsActions.SET_SELECTED_PROJECT,
        payload: projectResponse[0]
      };
    })
  );

  @Effect()
  technologiesFetch = this.actions$
    .pipe(
      ofType(ProjectsActions.FETCH_TECHNOLOGIES),
      withLatestFrom(this.store.select('technologies')),
      switchMap(() => this.technologiesService.getTechnologies()),
      map(
        (technologiesResponse) => {
          return {
            type: ProjectsActions.SET_TECHNOLOGIES,
            payload: technologiesResponse
          };
        }
      )
    );
}
