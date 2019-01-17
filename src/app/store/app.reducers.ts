import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { routerReducer } from '@ngrx/router-store';

import { environment } from '../../environments/environment';
import * as fromProjects from './projects/projects.reducers';
import * as fromCompanies from './companies/companies.reducers';

export interface AppState {
  router: any;
  projects: fromProjects.State;
  companies: fromCompanies.State;
}

export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer,
  projects: fromProjects.projectsReducer,
  companies: fromCompanies.companiesReducer
};

export const metaReducers: MetaReducer<AppState>[] =
  !environment.production ? [storeFreeze] : [];
