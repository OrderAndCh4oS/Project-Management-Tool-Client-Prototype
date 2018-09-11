import { normalize } from 'normalizr';
import { CREDENTIALS_LOGOUT } from './types';

const fetchData = (apiCall, isFetching, {REQUEST, SUCCESS, INVALID, FAILURE}, schema = null) =>
    ({values = null, params = null, id = null, handleErrors = null, url = null}) => (
        dispatch, getState) => {
        if (isFetching(getState(), values)) {
            return Promise.resolve();
        }
        dispatch({
            type: REQUEST,
            values: values
        });
        return apiCall({values, params, id, url}).then(
            response => {
                switch (response.status) {
                    case 200:
                    case 201:
                        handleSuccessfulResponse(response, dispatch, SUCCESS, values, schema);
                        break;
                    case 400:
                        handleInvalidResponse(response, dispatch, INVALID, values, handleErrors);
                        break;
                    case 401:
                        handleUnauthorisedResponse(response, dispatch);
                        break;
                    default:
                        handleUnknownResponse(dispatch, FAILURE, values, handleErrors);
                }
                return response;
            },
            error => {
                handleErrorResponse(dispatch, FAILURE, values, error, handleErrors);
                return error;
            });
    };

const makePagination = (response) => {
    if(response.hasOwnProperty('count') && response.count !== null) {
        const pagination = {count: response.count};
        pagination.next = response.next ? response.next : null;
        pagination.prev = response.previous ? response.previous : null;
        return pagination;
    }

    return null;
};

function makeData(data, schema) {
    data = data.hasOwnProperty('results') ? data.results : data;
    data = schema ? normalize(data, schema) : data;
    return data;
}

const handleSuccessfulResponse = (response, dispatch, SUCCESS, values, schema) => {
    response.json().then((data) => {
        dispatch({
            type: SUCCESS,
            values,
            data: makeData(data, schema),
            pagination: makePagination(data),
        });
    });
};
const handleInvalidResponse = (response, dispatch, INVALID, values, handleErrors) => {
    response.json().then((errors) => {
        dispatch({
            type: INVALID,
            values,
            errors
        });
        if (typeof handleErrors === 'function') {
            handleErrors(errors);
        }
    });
};
const handleUnknownResponse = (dispatch, FAILURE, values, handleErrors) => {
    dispatch({
        type: FAILURE,
        values,
        error: 'Response status code not handled'
    });
    if (typeof handleErrors === 'function') {
        handleErrors({general: 'Response status code not handled'});
    }
};
const handleErrorResponse = (dispatch, FAILURE, values, error, handleErrors) => {
    dispatch({
        type: FAILURE,
        values: values,
        error: error.message || 'Something went wrong'
    });
    if (typeof handleErrors === 'function') {
        handleErrors({general: error.message || 'Something went wrong'});
    }
};
const handleUnauthorisedResponse = (response, dispatch) => {
    dispatch({
        type: CREDENTIALS_LOGOUT
    });
};

export default fetchData;
