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
  learnMethodFetch = this.actions$
    .pipe(
      ofType(ProcessesActions.FETCH_LEARN_METHODS),
      withLatestFrom(this.store.select('processes')),
      switchMap(() => this.processesService.getUXMethods('process-learn.json')),
      map(
        (methodsResponse) => {
          return {
            type: ProcessesActions.SET_LEARN_METHODS,
            payload: methodsResponse
          };
        }
      )
    );

  @Effect()
  designMethodFetch = this.actions$
    .pipe(
      ofType(ProcessesActions.FETCH_DESIGN_METHODS),
      withLatestFrom(this.store.select('processes')),
      switchMap(() => this.processesService.getUXMethods('process-design.json')),
      map(
        (methodsResponse) => {
          return {
            type: ProcessesActions.SET_DESIGN_METHODS,
            payload: methodsResponse
          };
        }
      )
    );

  @Effect()
  testMethodFetch = this.actions$
    .pipe(
      ofType(ProcessesActions.FETCH_TEST_METHODS),
      withLatestFrom(this.store.select('processes')),
      switchMap(() => this.processesService.getUXMethods('process-test.json')),
      map(
        (methodsResponse) => {
          return {
            type: ProcessesActions.SET_TEST_METHODS,
            payload: methodsResponse
          };
        }
      )
    );
}
