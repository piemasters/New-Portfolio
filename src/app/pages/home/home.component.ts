import { Component, OnInit } from '@angular/core';

import { Company } from '../../shared/models/company.model';
import { Observable } from 'rxjs/internal/Observable';
import { select, Store } from '@ngrx/store';
import * as fromCompanies from '../../store/companies/companies.reducers';
import * as CompaniesActions from '../../store/companies/companies.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  companies$: Observable<Company[]>;

  constructor(
    private store: Store<fromCompanies.State>,
  ) {
  }

  ngOnInit() {
    this.store.dispatch(new CompaniesActions.FetchCompanies());
    this.companies$ = this.store.pipe(select('companies'));
  }

}
