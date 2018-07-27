import {normalize} from 'normalizr';

const fetchData = (apiCall, isFetching, {REQUEST, SUCCESS, INVALID, FAILURE}, schema = null) =>
    ({values = null, params = null, id = null, handleErrors = null}) => (dispatch, getState) => {
        if (isFetching(getState(), values)) {
            return Promise.resolve();
        }
        dispatch({
            type: REQUEST,
            values: values
        });
        return apiCall({values, params, id}).then(
            response => {
                switch (response.status) {
                    case 200:
                        handleSuccessfulResponse(response, dispatch, SUCCESS, values, schema);
                        break;
                    case 400:
                        handleInvalidResponse(response, dispatch, INVALID, values, handleErrors);
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

const handleSuccessfulResponse = (response, dispatch, SUCCESS, values, schema) => {
    response.json().then((data) => {
        dispatch({
            type: SUCCESS,
            values,
            data: schema ? normalize(data, schema) : data
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

export default fetchData;
