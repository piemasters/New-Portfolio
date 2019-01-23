import { Project } from '../../shared/models/project.model';
import * as ProjectsActions from './projects.actions';
import { Technology } from '../../shared/models/technology.model';

export interface State {
  projectList: Project[];
  technologyList: Technology[];
  selectedProject: Project;

}

const initialState: State = {
  projectList: [],
  technologyList: [],
  selectedProject: null
};


export function projectsReducer(state = initialState, action: ProjectsActions.ProjectsActions) {
  switch (action.type) {
    case ProjectsActions.SET_PROJECTS:
      return {
        ...state,
        projectList: action.payload
      };
    case ProjectsActions.SET_SELECTED_PROJECT_ID:
      return {
        ...state,
        selectedProject: { ...state.selectedProject, id: action.payload }
      };
    case ProjectsActions.SET_SELECTED_PROJECT:
      return {
        ...state,
        selectedProject: action.payload
      };
    case ProjectsActions.SET_TECHNOLOGIES:
      return {
        ...state,
        technologyList: action.payload
      };
  }
  return state;
}
