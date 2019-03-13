import * as ProcessesActions from './processes.actions';
import { UXMethod } from '../../shared/models/ux-method.model';

export interface State {
  methodsList: UXMethod[];
  selectedMethod: UXMethod;
  selectedMethodID: string;
  processType: string;
}

const initialState: State = {
  methodsList: [],
  selectedMethod: null,
  selectedMethodID: null,
  processType: 'learn'
};

export function processesReducer(state = initialState, action: ProcessesActions.ProcessesActions) {
  switch (action.type) {
    case ProcessesActions.SET_METHODS:
      return {
        ...state,
        methodsList: action.payload
      };
    case ProcessesActions.SET_SELECTED_METHOD_ID:
      return {
        ...state,
        selectedMethodID: action.payload
      };
    case ProcessesActions.SET_SELECTED_METHOD:
      return {
        ...state,
        selectedMethod: action.payload
      };
    case ProcessesActions.SET_PROCESS_TYPE:
      return {
        ...state,
        processType: action.payload
      };
  }
  return state;
}
