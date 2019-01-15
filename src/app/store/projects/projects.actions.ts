import { Action } from '@ngrx/store';

import { Project } from '../../shared/models/project.model';

export const FETCH_PROJECTS = 'FETCH_PROJECTS';
export const SET_PROJECTS = 'SET_PROJECTS';

export class FetchProjects implements Action {
  readonly type = FETCH_PROJECTS;
}

export class SetProjects implements Action {
  readonly type = SET_PROJECTS;

  constructor(public payload: Project[]) {}
}

export type ProjectsActions = FetchProjects | SetProjects;
