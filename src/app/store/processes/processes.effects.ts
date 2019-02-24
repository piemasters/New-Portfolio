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
  uxMethodsFetch = this.actions$
    .pipe(
      ofType(ProcessesActions.FETCH_UX_METHOIDS),
      withLatestFrom(this.store.select('processes')),
      switchMap(() => this.processesService.getUXMethods()),
      map(
        (methodsResponse) => {
          return {
            type: ProcessesActions.SET_UX_METHODS,
            payload: methodsResponse
          };
        }
      )
    );
}
