import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, switchMap, withLatestFrom } from 'rxjs/operators';

import * as fromProcesses from './processes.reducers';
import * as ProcessesActions from './processes.actions';
import { ProcessesService } from '../../shared/services/processes.service';

@Injectable()
export class ProcessesEffects {
  constructor(
    private actions$: Actions,
    private processesService: ProcessesService,
    private store: Store<fromProcesses.State>) {
  }

  @Effect()
  methodsFetch = this.actions$
    .pipe(
      ofType(ProcessesActions.FETCH_METHODS),
      withLatestFrom(this.store.select('processes')),
      switchMap(() => this.processesService.getUXMethods('processes.json')),
      map(
        (methodsResponse) => {
          return {
            type: ProcessesActions.SET_METHODS,
            payload: methodsResponse
          };
        }
      )
    );

  @Effect()
  methodFetch = this.actions$.pipe(
    ofType(ProcessesActions.FETCH_SELECTED_METHOD),
    withLatestFrom(this.store.select('processes')),
    switchMap(([action, state]) => this.processesService.getUXMethod(state.selectedMethodID, 'processes.json')),
    map(
      (methodsResponse) => {
        return {
          type: ProcessesActions.SET_SELECTED_METHOD,
          payload: methodsResponse
        };
      }
    )
  );
}
