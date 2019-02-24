import { Action } from '@ngrx/store';

import { UXMethod } from '../../shared/models/ux-method.model';

export const FETCH_UX_METHOIDS = 'FETCH_UX_METHOIDS';
export const SET_UX_METHODS = 'SET_UX_METHODS';

export class FetchUXMethods implements Action {
  readonly type = FETCH_UX_METHOIDS;
}

export class SetUXMethods implements Action {
  readonly type = SET_UX_METHODS;

  constructor(public payload: UXMethod[]) {}
}

export type ProcessesActions = FetchUXMethods | SetUXMethods;
