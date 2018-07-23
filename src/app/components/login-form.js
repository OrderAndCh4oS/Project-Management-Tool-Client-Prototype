/* eslint-disable react/prop-types,indent */
import React from 'react';
import {FormError, Input} from './form-elements';
import {Form, withFormik} from 'formik';
import {connect} from 'react-redux';
import * as actions from '../actions';
import * as fromReducers from '../reducers';
import * as Yup from 'yup';

let LoginForm = ({
                     auth: {errorMessage, isInvalid},
                     values,
                     errors,
                     touched,
                     handleChange,
                     handleBlur,
                     isSubmitting
                 }) => {
    errors = isInvalid ? isInvalid : errors;
    errors = errorMessage ? errorMessage : errors;
    console.log('isInvalid: ', isInvalid);
    console.log('errors: ', errors);
    return (
        <Form>
            <Input name="username"
                   label="Username"
                   value={values.username || ''}
                   type="text"
                   onChange={handleChange}
                   onBlur={handleBlur}
                   error={touched.username && errors.username}
            />
            <Input name="password"
                   label="Password"
                   value={values.password || ''}
                   type="password"
                   classes={['password-field']}
                   onChange={handleChange}
                   onBlur={handleBlur}
                   error={touched.password && errors.password}
            />
            <button type="submit" disabled={isSubmitting}>Login</button>
            <FormError error={errors.non_field_errors}/>
            {isSubmitting ? <p className={'form-action'}>Checking credentials...</p> : null}
        </Form>
    );
};

LoginForm = withFormik({
    handleSubmit: (
        values,
        {setSubmitting, resetForm, props: {fetchToken}}
    ) => {
        delete values.auth;
        fetchToken(values).then((response) => {
            if (response.status !== 200) {
                setSubmitting(false);
                resetForm();
            }
        });
    },
    validationSchema: Yup.object().shape({
        username: Yup.string()
            .required('Username is required!'),
        password: Yup.string()
            .required('Password is required!')
    })
})(LoginForm);

const mapStateToLoginFormProps = (state) => {
    return {
        auth: {
            loginForm: fromReducers.getAuth(state),
            isFetching: fromReducers.isFetchingAuth(state),
            isInvalid: fromReducers.authInvalidRequest(state),
            errorMessage: fromReducers.authErrorMessage(state)
        }
    };
};

LoginForm = connect(
    mapStateToLoginFormProps,
    actions
)(LoginForm);

export default LoginForm;
