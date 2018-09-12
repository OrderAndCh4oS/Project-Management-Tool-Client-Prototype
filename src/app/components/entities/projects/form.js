/* eslint-disable indent,no-class-assign */
import React, { Component } from 'react';
import { FormError, Input, Select } from '../../elements/form';
import { Form as FormikForm, withFormik } from 'formik';
import { connect } from 'react-redux';
import * as actions from '../../../actions/index';
import * as fromReducers from '../../../reducers/index';
import * as Yup from 'yup';
import { Title } from '../../elements/typography';
import { fetchCompanyForm } from '../../../api';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            companyList: [],
        };
    }

    componentDidMount() {
        fetchCompanyForm()
            .then(response => response.json()
                .then((data) => {
                    console.log(data);
                    this.setState({
                        companyList: data.results.map(
                            result => ({value: result.url, name: result.name}),
                        ),
                    });
                }));
    }

    render() {
        const {
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            isSubmitting,
        } = this.props;
        return (
            <div className='project-form form column-section'>
                <Title tag='h2'>Add Project</Title>
                <FormikForm>
                    <Input name="reference_code" label="Reference code"
                           value={values.reference_code || ''} type="text"
                           onChange={handleChange} onBlur={handleBlur}
                           error={touched.reference_code &&
                           errors.reference_code}/>
                    <Input name="title" label="Title" value={values.title || ''}
                           type="text" onChange={handleChange}
                           onBlur={handleBlur}
                           error={touched.title && errors.title}/>
                    <Select name="company" label="Company"
                            value={values.company || ''}
                            options={this.state.companyList}
                            onChange={handleChange} onBlur={handleBlur}
                            error={touched.company && errors.company}/>
                    <button type="submit" disabled={isSubmitting}>
                        Add Project
                    </button>
                    <FormError error={errors.non_field_errors}/>
                    <FormError error={errors.general}/>
                    {isSubmitting
                        ? <p className={'form-action'}>Adding Project...</p>
                        : null}
                </FormikForm>
            </div>
        );
    }
}

Form = withFormik({
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
})(Form);

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

const ProjectForm = connect(
    mapStateToProjectFormProps,
    actions,
)(Form);

export default ProjectForm;
