import * as ProcessesActions from './processes.actions';
import { UXMethod } from '../../shared/models/ux-method.model';

export interface State {
  learnList: UXMethod[];
  designList: UXMethod[];
  testList: UXMethod[];
}

const initialState: State = {
  learnList: [],
  designList: [],
  testList: []
};

export function processesReducer(state = initialState, action: ProcessesActions.ProcessesActions) {
  switch (action.type) {
    case ProcessesActions.SET_LEARN_METHODS:
      return {
        ...state,
        learnList: action.payload
      };
    case ProcessesActions.SET_DESIGN_METHODS:
      return {
        ...state,
        designList: action.payload
      };
    case ProcessesActions.SET_TEST_METHODS:
      return {
        ...state,
        testList: action.payload
      };
  }
  return state;
}
