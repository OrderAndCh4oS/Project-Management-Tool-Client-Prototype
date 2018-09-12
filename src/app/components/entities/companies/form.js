/* eslint-disable indent,no-class-assign */
import React, { Component } from 'react';
import { FormError, Input, MultiSelect } from '../../elements/form';
import { Form as FormikForm, withFormik } from 'formik';
import { connect } from 'react-redux';
import * as actions from '../../../actions/index';
import * as fromReducers from '../../../reducers/index';
import * as Yup from 'yup';
import { Title } from '../../elements/typography';
import { fetchAddressForm, fetchClientForm } from '../../../api';

class Form extends Component {
    handleMultiSelectChange = (e) => {
        console.log('HERE');
        const options = e.target.options;
        const value = [];
        for(let option of options) {
            if(option.selected) {
                value.push(option.value);
            }
        }
        const {setFieldValue} = this.props;
        setFieldValue(e.target.getAttribute('name'), value);
    };

    constructor(props) {
        super(props);
        this.state = {
            addressList: [],
            clientList: [],
        };
    }

    componentDidMount() {
        fetchAddressForm()
            .then(response => response.json()
                .then((data) => {
                    this.setState({
                        addressList: data.results.map(
                            result => ({
                                value: result.url,
                                name: result.address_first_line + ', ' +
                                    result.city,
                            }),
                        ),
                    });
                }));
        fetchClientForm()
            .then(response => response.json()
                .then((data) => {
                    this.setState({
                        clientList: data.results.map(
                            result => ({
                                value: result.url,
                                name: result.fullname,
                            }),
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
            <div className='company-form form column-section'>
                <Title tag='h2'>Add Company</Title>
                <FormikForm>
                    <Input name="name" label="Name" value={values.name || ''}
                           type="text" onChange={handleChange}
                           onBlur={handleBlur}
                           error={touched.name && errors.name}/>
                    <Input name="website" label="Website URL"
                           value={values.website || ''} type="text"
                           onChange={handleChange} onBlur={handleBlur}
                           error={touched.website && errors.website}/>
                    <MultiSelect name="addresses" label="Address"
                                 options={this.state.addressList}
                                 multiple={true} value={values.addresses || []}
                                 onChange={this.handleMultiSelectChange}
                                 onBlur={handleBlur}
                                 error={touched.addresses && errors.addresses}/>
                    <MultiSelect name="clients" label="Client"
                                 options={this.state.clientList} multiple={true}
                                 value={values.clients || []}
                                 onChange={this.handleMultiSelectChange}
                                 onBlur={handleBlur}
                                 error={touched.clients && errors.clients}/>
                    <button type="submit" disabled={isSubmitting}>Add Company
                    </button>
                    <FormError error={errors.non_field_errors}/>
                    <FormError error={errors.general}/>
                    {isSubmitting
                        ? <p className={'form-action'}>Adding Company...</p>
                        : null}
                </FormikForm>
            </div>
        );
    }
}

Form = withFormik({
    handleSubmit: (
        values,
        {setSubmitting, resetForm, setErrors, props: {postCompany}},
    ) => {
        delete values.auth;
        const handleErrors = (errors) => {
            setSubmitting(false);
            resetForm();
            setErrors(errors);
        };
        postCompany({values, handleErrors});
        setSubmitting(false);
        resetForm();
    },
    validationSchema: Yup.object().shape({
        name: Yup.string()
            .required('Name is required!'),
        website: Yup.string(),
        addresses: Yup.array(),
        clients: Yup.array(),
    }),
})(Form);

const mapStateToCompanyFormProps = (state) => {
    return {
        auth: {
            loginForm: fromReducers.getCompany(state),
            isFetching: fromReducers.getCompanyIsFetching(state),
            isInvalid: fromReducers.getCompanyFetchInvalidRequest(state),
            errorMessage: fromReducers.getCompanyFetchErrorMessage(state),
        },
    };
};

const CompanyForm = connect(
    mapStateToCompanyFormProps,
    actions,
)(Form);

export default CompanyForm;
