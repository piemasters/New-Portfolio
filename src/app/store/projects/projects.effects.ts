import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { filter, map, mergeMap, switchMap, tap, withLatestFrom } from 'rxjs/operators';

import * as fromProjects from './projects.reducers';
import * as ProjectsActions from './projects.actions';
import { Project } from '../../shared/models/project.model';
import { Technology } from '../../shared/models/technology.model';
import { ProjectsService } from '../../shared/services/projects.service';

@Injectable()
export class ProjectsEffects {
  constructor(
    private actions$: Actions,
    private httpClient: HttpClient,
    private store: Store<fromProjects.State>,
    private projectsService: ProjectsService) {
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

  @Effect()
  projectFetch = this.actions$.pipe(
    ofType(ProjectsActions.FETCH_SELECTED_PROJECT),
    withLatestFrom(this.store.select('projects')),
    switchMap(([ action, state ]) => {
      return this.projectsService.getProjects().pipe(
        mergeMap(val => val),
        filter(item => {
          if (state.selectedProject) {
            return item.id === state.selectedProject;
          }
        }),
        map( (projectResponse) => {
            console.log(projectResponse);
            return {
              type: ProjectsActions.SET_SELECTED_PROJECT,
              payload: projectResponse
            };
          }
        )
      );
    })
  );


  @Effect()
  technologiesFetch = this.actions$
    .pipe(
      ofType(ProjectsActions.FETCH_TECHNOLOGIES),
      withLatestFrom(this.store.select('technologies')),
      switchMap(([ action, state ]) => {
        return this.httpClient.get<Technology[]>('./assets/data/technologies.json', {
          observe: 'body',
          responseType: 'json'
        });
      }),
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
