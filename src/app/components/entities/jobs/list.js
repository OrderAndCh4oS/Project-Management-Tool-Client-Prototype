/* eslint-disable no-class-assign,react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Title } from '../../elements/typography';
import FetchError from '../../elements/fetch-error';
import * as actions from '../../../actions/index';
import * as reducers from '../../../reducers/index';
import ListItem from './list-item';
import Pagination from '../../elements/pagination';

class List extends Component {

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        const {fetchJobs} = this.props;
        fetchJobs({params: {with: ['project', 'company']}})
            .then(() => console.log('done!'));
    }

    render() {
        const {jobs, errorMessage, isFetching, pagination, paginateJobs} = this.props;
        if(isFetching || !jobs.length) {
            return <p>Loading...</p>;
        }
        if(errorMessage && !jobs.length) {
            return <FetchError message={errorMessage}
                               onRetry={() => this.fetchData()}/>;
        }
        return (
            <div className='job-list'>
                <Title tag='h2'>My Job List</Title>
                {jobs.map((job) => <ListItem key={job.uuid} {...job}/>)}
                <Pagination pagination={pagination} paginate={paginateJobs}/>
            </div>
        );
    }
}

const mapStateToJobsListProps = (state) => {
    return {
        jobs: reducers.getJobs(state),
        pagination: reducers.getJobsPagination(state),
        isFetching: reducers.getJobsIsFetching(state),
        errorMessage: reducers.getJobsFetchErrorMessage(state),
    };
};

const JobList = connect(mapStateToJobsListProps, actions)(List);

export default JobList;
