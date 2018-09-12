/* eslint-disable no-class-assign,react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Title } from '../../elements/typography';
import FetchError from '../../elements/fetch-error';
import ListItem from './list-item';
import * as actions from '../../../actions/index';
import * as reducers from '../../../reducers/index';
import Pagination from '../../elements/pagination';

class List extends Component {

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        const {fetchCompanies} = this.props;
        fetchCompanies({})
            .then(() => console.log('done!'));
    }

    render() {
        const {companies, errorMessage, isFetching, pagination, paginateCompanies} = this.props;
        console.log('C3', companies);
        if(isFetching || !companies.length) {
            return <p>Loading...</p>;
        }
        if(errorMessage && !companies.length) {
            return <FetchError message={errorMessage}
                               onRetry={() => this.fetchData()}/>;
        }
        return (
            <div className='company-list'>
                <Title tag='h2'>Company List</Title>
                {companies.map((company) => {
                    console.log('C2:', company);
                    return <ListItem key={company.uuid} {...company}/>;
                })}
                <Pagination pagination={pagination}
                            paginate={paginateCompanies}/>
            </div>
        );
    }
}

const mapStateToCompaniesListProps = (state) => {
    return {
        companies: reducers.getCompanies(state),
        isFetching: reducers.getCompaniesIsFetching(state),
        errorMessage: reducers.getCompaniesFetchErrorMessage(state),
        pagination: reducers.getCompaniesPagination(state),
    };
};

const CompanyList = connect(mapStateToCompaniesListProps, actions)(List);

export default CompanyList;
