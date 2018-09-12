import { combineReducers } from 'redux';
import byId, * as fromById from './byId';
import list, * as fromList from './list';

const statuses = combineReducers({byId, list});

export default statuses;

export const getStatuses = (state) => {
    const ids = getIds(state);
    return ids.map(id => fromById.getStatus(state.statuses, id));
};

export const getIds = (state) => fromList.getIds(state.statuses);
export const getPagination = (state) => fromList.getPagination(state.statuses);
export const getIsFetching = (state) => fromList.getIsFetching(state.statuses);
export const getFetchErrorMessage = (state) => fromList.getFetchErrorMessage(
    state.statuses);
export const getIsFetchingSingle = (state) => fromList.getIsFetchingSingle(
    state.statuses);
export const getFetchSingleInvalidRequest = (state) => fromList.getFetchSingleInvalidRequest(
    state.statuses);
export const getFetchSingleErrorMessage = (state) => fromList.getFetchSingleErrorMessage(
    state.statuses);
export const getStatus = (state, id) => fromById.getStatus(state.statuses,
    id);
