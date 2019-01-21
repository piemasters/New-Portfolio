import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, switchMap, withLatestFrom } from 'rxjs/operators';

import * as fromCompanies from './companies.reducers';
import * as CompaniesActions from './companies.actions';
import { TechnologiesService } from '../../shared/services/technologies.service';

@Injectable()
export class CompaniesEffects {
  constructor(
    private actions$: Actions,
    private technologiesService: TechnologiesService,
    private store: Store<fromCompanies.State>) {
  }

  @Effect()
  companiesFetch = this.actions$
    .pipe(
      ofType(CompaniesActions.FETCH_COMPANIES),
      withLatestFrom(this.store.select('companies')),
      switchMap(() => this.technologiesService.getTechnologies()),
      map(
        (companiesResponse) => {
          return {
            type: CompaniesActions.SET_COMPANIES,
            payload: companiesResponse
          };
        }
      )
    );
}
