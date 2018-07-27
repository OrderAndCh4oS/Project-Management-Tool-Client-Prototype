import {combineReducers} from 'redux';
import * as types from '../../actions/types';
import requestStatuses from '../request-statuses';

const ids = (state = [], action) => {
    switch (action.type) {
        case types.JOBS_FETCH.SUCCESS:
        case types.JOB_FETCH.SUCCESS:
            return action.data.result;
        default:
            return state;
    }
};
const fetchManyRequest = requestStatuses(undefined, types.JOBS_FETCH);
const fetchSingleRequest = requestStatuses(undefined, types.JOB_FETCH);
const list = combineReducers({ids, fetchManyRequest, fetchSingleRequest});

export default list;

export const getIds = (state) => state.list.ids;
export const getIsFetching = (state) => state.list.fetchManyRequest.isFetching;
export const getFetchErrorMessage = (state) => state.list.fetchManyRequest.errorMessage;
export const getIsFetchingSingle = (state) => state.list.fetchSingleRequest.isFetching;
export const getFetchSingleErrorMessage = (state) => state.list.fetchSingleRequest.errorMessage;
