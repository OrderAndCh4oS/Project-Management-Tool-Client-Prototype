import {combineReducers} from 'redux';
import requestStatuses from './request-statuses';
import * as types from '../actions/types';

//Todo: Consider switching to cookie auth with httpOnly
//Todo: Probably better to store local data when fetch resolves, this feels like a side affect.

const isAuthenticated = (state = false, action) => {
    switch (action.type) {
        case types.CREDENTIALS_FETCH.SUCCESS:
            localStorage.setItem('TOKEN', action.data.token);
            return true;
        case types.CREDENTIALS_LOGOUT:
            localStorage.removeItem('TOKEN');
            return false;
        default:
            return state;
    }
};

const requestStatus = requestStatuses(undefined, types.CREDENTIALS_FETCH);

const auth = combineReducers({
    isAuthenticated,
    requestStatus
});

export default auth;

export const getAuth = (state) => state.isAuthenticated;
export const getIsFetching = (state) => state.requestStatus.isFetching;
export const getInvalidRequest = (state) => state.requestStatus.invalidRequest;
export const getErrorMessage = (state) => state.requestStatus.errorMessage;