import {normalize} from 'normalizr';

const fetchData = (apiCall, isFetching, {REQUEST, SUCCESS, INVALID, FAILURE}, schema = null) => (values, {params = null, handleErrors = null}) => (dispatch, getState) => {
    if (isFetching(getState(), values)) {
        return Promise.resolve();
    }
    dispatch({
        type: REQUEST,
        values: values
    });
    let token = null;
    if (getState().app.auth.hasOwnProperty('data') && getState().app.auth.data !== null) {
        token = getState().app.auth.data.token;
    }
    return apiCall(values, token, params).then(
        response => {
            switch (response.status) {
                case 200:
                    response.json().then((data) => {
                        dispatch({
                            type: SUCCESS,
                            values,
                            data: schema ? normalize(data, schema) : data
                        });
                    });
                    break;
                case 400:
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
                    break;
                default:
                    dispatch({
                        type: FAILURE,
                        values,
                        error: 'Response status code not handled'
                    });
                    if (typeof handleErrors === 'function') {
                        handleErrors({general: 'Response status code not handled'});
                    }
            }
            return response;
        },
        error => {
            dispatch({
                type: FAILURE,
                values: values,
                error: error.message || 'Something went wrong'
            });
            if (typeof handleErrors === 'function') {
                handleErrors({general: error.message || 'Something went wrong'});
            }
            return error;
        });
};

export default fetchData;
