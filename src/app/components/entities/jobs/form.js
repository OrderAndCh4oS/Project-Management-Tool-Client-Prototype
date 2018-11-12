/* eslint-disable indent,no-class-assign */
import React, { Component } from 'react';
import { FormError, Input, Select } from '../../elements/form';
import { Form as FormikForm, withFormik } from 'formik';
import { connect } from 'react-redux';
import * as actions from '../../../actions/index';
import * as fromReducers from '../../../reducers/index';
import * as Yup from 'yup';
import { Title } from '../../elements/typography';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            companyList: [],
        };
    }

    componentDidMount() {
        fetchStaffForm()
            .then(response => response.json()
                .then((data) => {
                    console.log(data);
                    this.setState({
                        staffList: data.results.map(
                            result => ({value: result.url, name: result.name}),
                        ),
                    });
                }));
        fetchStatusForm()
            .then(response => response.json()
                .then((data) => {
                    console.log(data);
                    this.setState({
                        statusList: data.results.map(
                            result => ({value: result.url, name: result.name}),
                        ),
                    });
                }));
        fetchProjectForm()
            .then(response => response.json()
                .then((data) => {
                    console.log(data);
                    this.setState({
                        projectList: data.results.map(
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
            <div className='job-form form column-section'>
                <Title tag='h2'>Add Job</Title>
                <FormikForm>
                    <Input
                        name="reference_code"
                        label="Reference code"
                        value={values.reference_code || ''}
                        type="text"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.reference_code &&
                        errors.reference_code}
                    />
                    <Input
                        name="title"
                        label="Title"
                        value={values.title || ''}
                        type="text"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.title && errors.title}
                    />
                    <Select
                        name="company"
                        label="Company"
                        value={values.company || ''}
                        options={this.state.companyList}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.company && errors.company}
                    />
                    <button type="submit" disabled={isSubmitting}>
                        Add Job
                    </button>
                    <FormError error={errors.non_field_errors}/>
                    <FormError error={errors.general}/>
                    {isSubmitting
                        ? <p className={'form-action'}>Adding Job...</p>
                        : null}
                </FormikForm>
            </div>
        );
    }
}

Form = withFormik({
    handleSubmit: (
        values,
        {setSubmitting, resetForm, setErrors, props: {postJob}},
    ) => {
        delete values.auth;
        const handleErrors = (errors) => {
            setSubmitting(false);
            resetForm();
            setErrors(errors);
        };
        postJob({values, handleErrors});
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

const mapStateToJobFormProps = (state) => {
    return {
        auth: {
            loginForm: fromReducers.getJob(state),
            isFetching: fromReducers.getJobIsFetching(state),
            isInvalid: fromReducers.getJobFetchInvalidRequest(state),
            errorMessage: fromReducers.getJobFetchErrorMessage(state),
        },
    };
};

const JobForm = connect(
    mapStateToJobFormProps,
    actions,
)(Form);

export default JobForm;
