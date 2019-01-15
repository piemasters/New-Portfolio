import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { routerReducer } from '@ngrx/router-store';

import { environment } from '../../environments/environment';
import * as fromProjects from './projects/projects.reducers';

export interface AppState {
  router: any;
  projects: fromProjects.State;
}

export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer,
  projects: fromProjects.projectsReducer
};

export const metaReducers: MetaReducer<AppState>[] =
  !environment.production ? [storeFreeze] : [];
