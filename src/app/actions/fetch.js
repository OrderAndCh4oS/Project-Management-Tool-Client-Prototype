const fetchData = (apiCall, isFetching, {REQUEST, SUCCESS, INVALID, FAILURE}) => (values, handleErrors = null) => (dispatch, getState) => {
    if (isFetching(getState(), values)) {
        return Promise.resolve();
    }
    dispatch({
        type: REQUEST,
        values: values
    });
    return apiCall(values).then(
        response => {
            switch (response.status) {
                case 200:
                    response.json().then((data) => {
                        dispatch({
                            type: SUCCESS,
                            values,
                            data
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
