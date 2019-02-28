import { Action } from '@ngrx/store';

import { UXMethod } from '../../shared/models/ux-method.model';

export const FETCH_LEARN_METHODS = 'FETCH_LEARN_METHODS';
export const SET_LEARN_METHODS = 'SET_LEARN_METHODS';
export const FETCH_DESIGN_METHODS = 'FETCH_DESIGN_METHODS';
export const SET_DESIGN_METHODS = 'SET_DESIGN_METHODS';
export const FETCH_TEST_METHODS = 'FETCH_TEST_METHODS';
export const SET_TEST_METHODS = 'SET_TEST_METHODS';

export class FetchLearnMethods implements Action {
  readonly type = FETCH_LEARN_METHODS;
}

export class FetchDesignMethods implements Action {
  readonly type = FETCH_DESIGN_METHODS;
}

export class FetchTestMethods implements Action {
  readonly type = FETCH_TEST_METHODS;
}

export class SetLearnMethods implements Action {
  readonly type = SET_LEARN_METHODS;

  constructor(public payload: UXMethod[]) {}
}

export class SetDesignMethods implements Action {
  readonly type = SET_DESIGN_METHODS;

  constructor(public payload: UXMethod[]) {}
}

export class SetTestMethods implements Action {
  readonly type = SET_TEST_METHODS;

  constructor(public payload: UXMethod[]) {}
}

export type ProcessesActions =
  FetchLearnMethods | SetLearnMethods |
  FetchDesignMethods | SetDesignMethods |
  FetchTestMethods | SetTestMethods;
