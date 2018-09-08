import { combineReducers } from 'redux';
import byId, * as fromById from './byId';
import list, * as fromList from './list';

const projects = combineReducers({byId, list});

export default projects;

export const getProjects = (state) => {
    const ids = getIds(state);
    return ids.map(id => fromById.getProject(state.projects, id));
};

export const getIds = (state) => fromList.getIds(state.projects);
export const getIsFetching = (state) => fromList.getIsFetching(state.projects);
export const getFetchErrorMessage = (state) => fromList.getFetchErrorMessage(
    state.projects);
export const getIsFetchingSingle = (state) => fromList.getIsFetchingSingle(
    state.projects);
export const getFetchSingleInvalidRequest = (state) => fromList.getFetchSingleInvalidRequest(
    state.projects);
export const getFetchSingleErrorMessage = (state) => fromList.getFetchSingleErrorMessage(
    state.projects);
export const getProject = (state, id) => fromById.getProject(state.projects,
    id);
