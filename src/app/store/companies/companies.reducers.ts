import * as CompaniesActions from './companies.actions';
import { Company } from '../../shared/models/company.model';

export interface State {
  companyList: Company[];
}

const initialState: State = {
  companyList: []
};

export function companiesReducer(state = initialState, action: CompaniesActions.CompaniesActions) {
  switch (action.type) {
    case CompaniesActions.SET_COMPANIES:
      return {
        ...state,
        companyList: action.payload
      };
  }
  return state;
}
