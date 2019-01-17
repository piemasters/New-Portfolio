import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { filter, map, mergeMap, switchMap, withLatestFrom } from 'rxjs/operators';

import * as fromProjects from './projects.reducers';
import * as ProjectsActions from './projects.actions';
import { Project } from '../../shared/models/project.model';
import { Technology } from '../../shared/models/technology.model';

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

  @Effect()
  projectFetch = this.actions$
    .pipe(
      ofType(ProjectsActions.FETCH_SELECTED_PROJECT),
      withLatestFrom(this.store.select('projects')),
      switchMap(([ action, state ]) => {
        console.log(state);
        return this.httpClient.get<Project[]>('./assets/data/projects.json', {
          observe: 'body',
          responseType: 'json'
        }).pipe(
          mergeMap(res => res),
          filter(item => item.id === state)
        );
      }),
      map(
        (projectResponse) => {
          console.log(projectResponse);
          return {
            type: ProjectsActions.SET_SELECTED_PROJECT,
            payload: projectResponse
          };
        }
      )
    );



  // getProject(id: number) {
  //   return this.http.get<Project[]>(this.filePath).pipe(
  //     mergeMap(res => res),
  //     filter(item => item.id === id)
  //   );
  // }

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
