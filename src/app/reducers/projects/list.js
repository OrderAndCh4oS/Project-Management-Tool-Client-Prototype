import { combineReducers } from 'redux';
import * as types from '../../actions/types';
import requestStatuses from '../request-statuses';

const ids = (state = [], action) => {
    switch (action.type) {
        case types.PROJECTS_FETCH.SUCCESS:
            return action.data.result;
        case types.PROJECT_FETCH.SUCCESS:
            return [action.data.result, ...state];
        default:
            return state;
    }
};
const fetchManyRequest = requestStatuses(undefined, types.PROJECTS_FETCH);
const fetchSingleRequest = requestStatuses(undefined, types.PROJECT_FETCH);
const list = combineReducers({ids, fetchManyRequest, fetchSingleRequest});

export default list;

export const getIds = (state) => state.list.ids;
export const getIsFetching = (state) => state.list.fetchManyRequest.isFetching;
export const getFetchErrorMessage = (state) => state.list.fetchManyRequest.errorMessage;
export const getIsFetchingSingle = (state) => state.list.fetchSingleRequest.isFetching;
export const getFetchSingleInvalidRequest = (state) => state.list.fetchSingleRequest.invalidRequest;
export const getFetchSingleErrorMessage = (state) => state.list.fetchSingleRequest.errorMessage;
