import { Action } from '@ngrx/store';

import { Project } from '../../shared/models/project.model';
import { Technology } from '../../shared/models/technology.model';

export const FETCH_PROJECTS = 'FETCH_PROJECTS';
export const SET_PROJECTS = 'SET_PROJECTS';
export const FETCH_PROJECTS_PAGE = 'FETCH_PROJECTS_PAGE';
export const SET_PROJECTS_PAGE = 'SET_PROJECTS_PAGE';
export const FETCH_SELECTED_PROJECT = 'FETCH_SELECTED_PROJECT';
export const SET_SELECTED_PROJECT = 'SET_SELECTED_PROJECT';
export const SET_SELECTED_PROJECT_ID = 'SET_SELECTED_PROJECT_ID';
export const FETCH_TECHNOLOGIES = 'FETCH_TECHNOLOGIES';
export const SET_TECHNOLOGIES = 'SET_TECHNOLOGIES';

export class FetchProjects implements Action {
  readonly type = FETCH_PROJECTS;
}

export class SetProjects implements Action {
  readonly type = SET_PROJECTS;

  constructor(public payload: Project[]) {}
}

export class FetchProjectsPage implements Action {
  readonly type = FETCH_PROJECTS_PAGE;
}

export class SetProjectsPage implements Action {
  readonly type = SET_PROJECTS_PAGE;

  constructor(public payload: number) {}
}

export class FetchTechnologies implements Action {
  readonly type = FETCH_TECHNOLOGIES;
}

export class SetTechnologies implements Action {
  readonly type = SET_TECHNOLOGIES;

  constructor(public payload: Technology[]) {}
}

export class FetchSelectedProject implements Action {
  readonly type = FETCH_SELECTED_PROJECT;
}

export class SetSelectedProjectId implements Action {
  readonly type = SET_SELECTED_PROJECT_ID;

  constructor(public payload: number) {
  }
}

export class SetSelectedProject implements Action {
  readonly type = SET_SELECTED_PROJECT;

  constructor(public payload: Project) {
  }
}

export type ProjectsActions =
  FetchProjects | SetProjects | FetchProjectsPage | SetProjectsPage | FetchTechnologies |
  SetTechnologies | FetchSelectedProject |  SetSelectedProject | SetSelectedProjectId;
