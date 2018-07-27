import {combineReducers} from 'redux';
import byId, * as fromById from './byId';
import list, * as fromList from './list';

const jobs = combineReducers({byId, list});

export default jobs;

export const getJobs = (state) => {
    const ids = getIds(state);
    return ids.map(id => fromById.getJob(state.jobs, id));
};
export const getIds = (state) => fromList.getIds(state.jobs);
export const getIsFetching = (state) => fromList.getIsFetching(state.jobs);
export const getFetchErrorMessage = (state) => fromList.getFetchErrorMessage(state.jobs);
export const getIsFetchingSingle = (state) => fromList.getIsFetchingSingle(state.jobs);
export const getFetchSingleErrorMessage = (state) => fromList.getFetchSingleErrorMessage(state.jobs);
export const getJob = (state, id) => fromById.getJob(state.jobs, id);
