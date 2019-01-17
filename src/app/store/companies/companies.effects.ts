import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { map, switchMap, withLatestFrom } from 'rxjs/operators';

import * as fromCompanies from './companies.reducers';
import * as CompaniesActions from './companies.actions';
import { Company } from '../../shared/models/company.model';

@Injectable()
export class CompaniesEffects {
  constructor(private actions$: Actions, private httpClient: HttpClient, private store: Store<fromCompanies.State>) {
  }

  @Effect()
  companiesFetch = this.actions$
    .pipe(
      ofType(CompaniesActions.FETCH_COMPANIES),
      withLatestFrom(this.store.select('companies')),
      switchMap(([ action, state ]) => {
        return this.httpClient.get<Company[]>('./assets/data/companies.json', {
          observe: 'body',
          responseType: 'json'
        });
      }),
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
