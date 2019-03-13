import { Action } from '@ngrx/store';

import { UXMethod } from '../../shared/models/ux-method.model';

export const FETCH_METHODS = 'FETCH_METHODS';
export const SET_METHODS = 'SET_METHODS';
export const FETCH_SELECTED_METHOD = 'FETCH_SELECTED_METHOD';
export const SET_SELECTED_METHOD_ID = 'SET_SELECTED_METHOD_ID';
export const SET_SELECTED_METHOD = 'SET_SELECTED_METHOD';

export class FetchMethods implements Action {
  readonly type = FETCH_METHODS;
}

export class SetMethods implements Action {
  readonly type = SET_METHODS;

  constructor(public payload: UXMethod[]) {}
}

export class FetchSelectedMethod implements Action {
  readonly type = FETCH_SELECTED_METHOD;
}

export class SetSelectedMethodId implements Action {
  readonly type = SET_SELECTED_METHOD_ID;

  constructor(public payload: string) {
  }
}

export class SetSelectedMethod implements Action {
  readonly type = SET_SELECTED_METHOD;

  constructor(public payload: UXMethod) {
  }
}

export type ProcessesActions = FetchMethods | SetMethods | FetchSelectedMethod | SetSelectedMethodId | SetSelectedMethod;
