import { Action } from '@ngrx/store';

import { Company } from '../../shared/models/company.model';

export const FETCH_COMPANIES = 'FETCH_COMPANIES';
export const SET_COMPANIES = 'SET_COMPANIES';

export class FetchCompanies implements Action {
  readonly type = FETCH_COMPANIES;
}

export class SetCompanies implements Action {
  readonly type = SET_COMPANIES;

  constructor(public payload: Company[]) {}
}

export type CompaniesActions = FetchCompanies | SetCompanies;
