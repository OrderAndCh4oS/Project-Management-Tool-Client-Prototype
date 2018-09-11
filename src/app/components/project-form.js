/* eslint-disable indent */
import React from 'react';
import { FormError, Input } from './elements/form';
import { Form, withFormik } from 'formik';
import { connect } from 'react-redux';
import * as actions from '../actions';
import * as fromReducers from '../reducers';
import * as Yup from 'yup';
import { Title } from './elements/typography';

let ProjectForm = (
    {
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        isSubmitting,
    }) => {
    return (
        <div className='project-form form column-section'>
            <Title tag='h2'>Add Project</Title>
            <Form>
                <Input name="reference_code" label="Reference code"
                       value={values.reference_code || ''} type="text"
                       classes={['reference_code-field']}
                       onChange={handleChange} onBlur={handleBlur}
                       error={touched.reference_code && errors.reference_code}/>
                <Input name="title" label="Title" value={values.title || ''}
                       type="text" onChange={handleChange} onBlur={handleBlur}
                       error={touched.title && errors.title}/>
                <Input name="company" label="Company"
                       value={values.company || ''} type="text"
                       onChange={handleChange} onBlur={handleBlur}
                       error={touched.company && errors.company}/>
                <button type="submit" disabled={isSubmitting}>Add Project
                </button>
                <FormError error={errors.non_field_errors}/>
                <FormError error={errors.general}/>
                {isSubmitting
                    ? <p className={'form-action'}>Adding Project...</p>
                    : null}
            </Form>
        </div>
    );
};

ProjectForm = withFormik({
    handleSubmit: (
        values,
        {setSubmitting, resetForm, setErrors, props: {postProject}},
    ) => {
        delete values.auth;
        const handleErrors = (errors) => {
            setSubmitting(false);
            resetForm();
            setErrors(errors);
        };
        postProject({values, handleErrors});
        setSubmitting(false);
        resetForm();
    },
    validationSchema: Yup.object().shape({
        reference_code: Yup.string()
            .required('Reference Code is required!'),
        title: Yup.string()
            .required('Title is required!'),
        company: Yup.string()
            .required('Company is required!'),
    }),
})(ProjectForm);

const mapStateToProjectFormProps = (state) => {
    return {
        auth: {
            loginForm: fromReducers.getProject(state),
            isFetching: fromReducers.getProjectIsFetching(state),
            isInvalid: fromReducers.getProjectFetchInvalidRequest(state),
            errorMessage: fromReducers.getProjectFetchErrorMessage(state),
        },
    };
};

ProjectForm = connect(
    mapStateToProjectFormProps,
    actions,
)(ProjectForm);

export default ProjectForm;
