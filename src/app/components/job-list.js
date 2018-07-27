/* eslint-disable no-class-assign,react/prop-types */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Title} from './elements/typography';
import FetchError from './elements/fetch-error';
import * as actions from '../actions';
import * as reducers from '../reducers';
import JobListItem from './job-list-item';

class JobList extends Component {

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        const {fetchJobs} = this.props;
        fetchJobs({}).then(() => console.log('done!'));
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
                {jobs.map((job) => <JobListItem key={job.id} {...job}/>)}
            </div>
        );
    }
}

const mapStateToJobsListProps = (state) => {
    return {
        jobs: reducers.getJobs(state),
        isFetching: reducers.getJobsIsFetching(state),
        errorMessage: reducers.getJobsFetchErrorMessage(state)
    };
};

JobList = connect(mapStateToJobsListProps, actions)(JobList);

export default JobList;
