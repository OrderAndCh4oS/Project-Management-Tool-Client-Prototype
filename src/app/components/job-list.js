/* eslint-disable no-class-assign,react/prop-types */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Title} from './typography';
import FetchError from './fetch-error';
import * as actions from '../actions';
import * as reducers from '../reducers';
import JobDetail from './job-detail';

class JobList extends Component {

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        const {fetchJobs} = this.props;
        fetchJobs(null, {}).then(() => console.log('done!'));
    }

    render() {
        const {jobs, errorMessage, isFetching} = this.props;
        if (isFetching && !jobs.length) {
            return <p>Loading...</p>;
        }
        if (errorMessage && !jobs.length) {
            return <FetchError
                message={errorMessage}
                onRetry={() => this.fetchData()}
            />;
        }
        return (
            <div className={'job-list'}>
                <Title tag='h2'>My Job List</Title>
                {jobs.map((job) => <JobDetail key={job.id} {...job}/>)}
            </div>
        );
    }
}

const mapStateToJobsListProps = (state) => {
    return {
        jobs: reducers.getJobs(state),
        token: reducers.getToken(state),
        isFetching: reducers.getJobIsFetching(state),
        errorMessage: reducers.getJobFetchErrorMessage(state)
    };
};

JobList = connect(mapStateToJobsListProps, actions)(JobList);

export default JobList;
