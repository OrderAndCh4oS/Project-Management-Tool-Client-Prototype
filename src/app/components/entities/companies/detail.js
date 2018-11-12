/* eslint-disable no-class-assign,react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, Title } from '../../elements/typography';
import FetchError from '../../elements/fetch-error';
import * as actions from '../../../actions/index';
import * as reducers from '../../../reducers/index';
import { withRouter } from 'react-router-dom';

class Detail extends Component {

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        const {fetchCompany, uuid} = this.props;
        fetchCompany({id: uuid, params: {with: 'company'}})
            .then(() => console.log('done!'));
    }

    render() {
        const {company, errorMessage, isFetching} = this.props;
        if(isFetching || !company) {
            return <p>Loading...</p>;
        }
        if(errorMessage && !company) {
            return <FetchError message={errorMessage}
                               onRetry={() => this.fetchData()}/>;
        }
        return (
            <div className={'company-list'}>
                <Title tag='h2'>{company.name}</Title>
                <Text>{company.website}</Text>
            </div>
        );
    }
}

const mapStateToCompanyListProps = (state, {match}) => {
    const uuid = match.params.uuid || null;
    return {
        company: reducers.getCompany(state, uuid),
        isFetching: reducers.getCompanyIsFetching(state),
        errorMessage: reducers.getCompanyFetchErrorMessage(state),
        uuid: uuid,
    };
};

const CompanyDetail = withRouter(
    connect(mapStateToCompanyListProps, actions)(Detail));

export default CompanyDetail;
