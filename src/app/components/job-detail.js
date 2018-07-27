/* eslint-disable no-class-assign,react/prop-types */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Title} from './elements/typography';
import FetchError from './elements/fetch-error';
import * as actions from '../actions';
import * as reducers from '../reducers';
import {withRouter} from 'react-router-dom';

class JobDetail extends Component {

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        const {fetchJob, jobId} = this.props;
        fetchJob({id: jobId}).then(() => console.log('done!'));
    }

    render() {
        const {job, errorMessage, isFetching} = this.props;
        if (isFetching && !job.length) {
            return <p>Loading...</p>;
        }
        if (errorMessage && !job.length) {
            return <FetchError
                message={errorMessage}
                onRetry={() => this.fetchData()}
            />;
        }
        return (
            <div className={'job-list'}>
                <Title tag='h2'>{job.reference_code + ': ' + job.title}</Title>
            </div>
        );
    }
}

const mapStateToJobsDetailProps = (state, {match}) => {
    const jobId = match.params.jobId || null;
    return {
        job: reducers.getJob(state, jobId),
        isFetching: reducers.getJobIsFetching(state),
        errorMessage: reducers.getJobFetchErrorMessage(state),
        jobId
    };
};

JobDetail = withRouter(connect(mapStateToJobsDetailProps, actions)(JobDetail));

export default JobDetail;
