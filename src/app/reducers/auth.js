import {combineReducers} from 'redux';
import requestStatuses from './request-statuses';
import * as types from '../actions/types';

const auth = () => {
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

    return combineReducers({
        data,
        requestStatus
    });
};

export default auth;

export const getAuth = (state) => state.data;
export const isFetching = (state) => state.requestStatus.isFetching;
export const invalidRequest = (state) => state.requestStatus.invalidRequest;
export const errorMessage = (state) => state.requestStatus.errorMessage;