import {combineReducers} from 'redux';
import requestStatuses from './request-statuses';
import * as types from '../actions/types';

const data = (state = null, action) => {
    switch (action.type) {
        case types.CREDENTIALS_FETCH.SUCCESS:
            return action.data;
        case types.CREDENTIALS_LOGOUT:
            return null;
        default:
            return state;
    }
};

const requestStatus = requestStatuses(undefined, types.CREDENTIALS_FETCH);

const auth = combineReducers({
    data,
    requestStatus
});

export default auth;

export const getAuth = (state) => state.data;
export const getIsFetching = (state) => state.requestStatus.isFetching;
export const getInvalidRequest = (state) => state.requestStatus.invalidRequest;
export const getErrorMessage = (state) => state.requestStatus.errorMessage;