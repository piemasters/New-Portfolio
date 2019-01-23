import { Project } from '../../shared/models/project.model';
import * as ProjectsActions from './projects.actions';
import { Technology } from '../../shared/models/technology.model';

export interface State {
  projectList: Project[];
  selectedProjectId: number;
  selectedProject: Project;
  technologyList: Technology[];
  selectedProjectTech: Technology[];
}

const initialState: State = {
  projectList: [],
  selectedProjectId: null,
  selectedProject: null,
  technologyList: [],
  selectedProjectTech: []
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
        selectedProjectId: action.payload
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
    case ProjectsActions.SET_PROJECT_TECHNOLOGIES:
      return {
        ...state,
        selectedProjectTech: action.payload
      };
  }
  return state;
}
