import {combineReducers} from 'redux';
import * as types from '../../actions/types';
import requestStatuses from '../request-statuses';

const ids = (state = [], action) => {
    switch (action.type) {
        case types.JOBS_FETCH.SUCCESS:
            return action.data.result;
        default:
            return state;
    }
};
const fetchManyRequest = requestStatuses(undefined, types.JOBS_FETCH);
const list = combineReducers({ids, fetchManyRequest});

export default list;

export const getIds = (state) => state.list.ids;
export const getIsFetching = (state) => state.list.fetchManyRequest.isFetching;
export const getFetchErrorMessage = (state) => state.list.fetchManyRequest.errorMessage;
