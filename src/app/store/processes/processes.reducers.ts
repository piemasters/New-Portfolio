import * as ProcessesActions from './processes.actions';
import { UXMethod } from '../../shared/models/ux-method.model';

export interface State {
  uxMethodList: UXMethod[];
}

const initialState: State = {
  uxMethodList: []
};

export function processesReducer(state = initialState, action: ProcessesActions.ProcessesActions) {
  switch (action.type) {
    case ProcessesActions.SET_UX_METHODS:
      return {
        ...state,
        uxMethodList: action.payload
      };
  }
  return state;
}
