import { Project } from '../../shared/models/project.model';
import * as ProjectsActions from './projects.actions';

export interface State {
  projectList: Project[];
}

const initialState: State = {
  projectList: []
};

export function projectsReducer(state = initialState, action: ProjectsActions.ProjectsActions) {
  switch (action.type) {
    case ProjectsActions.SET_PROJECTS:
      return {
        ...state,
        projectList: action.payload
      };
  }
}
