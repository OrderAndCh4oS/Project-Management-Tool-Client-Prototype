import { combineReducers } from 'redux';
import byId, * as fromById from './byId';
import list, * as fromList from './list';

const staffMembers = combineReducers({byId, list});

export default staffMembers;

export const getProjects = (state) => {
    const ids = getIds(state);
    return ids.map(id => fromById.getProject(state.staffMembers, id));
};

export const getIds = (state) => fromList.getIds(state.staffMembers);
export const getPagination = (state) => fromList.getPagination(
    state.staffMembers);
export const getIsFetching = (state) => fromList.getIsFetching(
    state.staffMembers);
export const getFetchErrorMessage = (state) => fromList.getFetchErrorMessage(
    state.staffMembers);
export const getIsFetchingSingle = (state) => fromList.getIsFetchingSingle(
    state.staffMembers);
export const getFetchSingleInvalidRequest = (state) => fromList.getFetchSingleInvalidRequest(
    state.staffMembers);
export const getFetchSingleErrorMessage = (state) => fromList.getFetchSingleErrorMessage(
    state.staffMembers);
export const getProject = (state, id) => fromById.getProject(state.staffMembers,
    id);
