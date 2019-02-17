import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Company } from '../../shared/models/company.model';
import { select, Store } from '@ngrx/store';
import * as fromCompanies from '../../store/companies/companies.reducers';
import * as CompaniesActions from '../../store/companies/companies.actions';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  companies$: Observable<Company[]>;
  selectedCompany: Company;

  constructor(
    private store: Store<fromCompanies.State>,
  ) {
  }

  ngOnInit() {
    this.store.dispatch(new CompaniesActions.FetchCompanies());
    this.companies$ = this.store.pipe(
      select('companies'),
      map(c => c.companyList)
    );
  }

  selectCompany(company) {
    this.selectedCompany = company;
  }

}
