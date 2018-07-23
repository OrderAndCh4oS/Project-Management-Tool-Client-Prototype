import {combineReducers} from 'redux';

const requestStatuses = (check, {REQUEST, SUCCESS, FAILURE, INVALID = null, RESET = null}) => {
    const didComplete = (state = false, action) => {
        if (typeof check === 'function' && check(action)) {
            return state;
        }
        switch (action.type) {
            case SUCCESS:
                return true;
            case REQUEST:
            case FAILURE:
            case INVALID:
            case RESET:
                return false;
            default:
                return state;
        }
    };
    const isFetching = (state = false, action) => {
        if (typeof check === 'function' && check(action)) {
            return state;
        }
        switch (action.type) {
            case REQUEST:
                return true;
            case SUCCESS:
            case FAILURE:
            case INVALID:
                return false;
            default:
                return state;
        }
    };
    const invalidRequest = (state = null, action) => {
        switch (action.type) {
            case INVALID:
                return action.errors;
            case REQUEST:
            case SUCCESS:
            case FAILURE:
                return null;
            default:
                return state;
        }
    };
    const errorMessage = (state = null, action) => {
        if (typeof check === 'function' && check(action)) {
            return state;
        }
        switch (action.type) {
            case FAILURE:
                return action.errors;
            case REQUEST:
            case SUCCESS:
            case INVALID:
                return null;
            default:
                return state;
        }
    };
    if (INVALID !== null) {
        return combineReducers({isFetching, didComplete, errorMessage, invalidRequest});
    } else {
        return combineReducers({isFetching, didComplete, errorMessage});
    }
};

export default requestStatuses;