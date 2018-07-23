const fetchData = (apiCall, isFetching, {REQUEST, SUCCESS, INVALID, FAILURE}) => (values, formik) => (dispatch, getState) => {
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
                        formik.setSubmitting(false);
                        formik.resetForm();
                        formik.setErrors(errors);
                    });
                    break;
                default:
                    dispatch({
                        type: FAILURE,
                        values,
                        message: 'Response status code not handled'
                    });
                    formik.setSubmitting(false);
                    formik.resetForm();
                    formik.setErrors({general: 'Response status code not handled'});

            }
            return response;
        },
        error => {
            dispatch({
                type: FAILURE,
                values: values,
                message: error.message || 'Something went wrong'
            });
            formik.setSubmitting(false);
            formik.resetForm();
            formik.setErrors({general: error.message || 'Something went wrong'});
            return error;
        });
};

export default fetchData;
