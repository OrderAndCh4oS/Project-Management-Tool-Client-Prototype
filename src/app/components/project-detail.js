/* eslint-disable no-class-assign,react/prop-types */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Title} from './elements/typography';
import FetchError from './elements/fetch-error';
import * as actions from '../actions';
import * as reducers from '../reducers';
import {withRouter} from 'react-router-dom';

class ProjectDetail extends Component {

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        const {fetchProject, projectId} = this.props;
        fetchProject({id: projectId, params: {with: 'company'}}).then(() => console.log('done!'));
    }

    render() {
        const {project, errorMessage, isFetching} = this.props;
        if (isFetching || !project) {
            return <p>Loading...</p>;
        }
        if (errorMessage && !project) {
            return <FetchError
                message={errorMessage}
                onRetry={() => this.fetchData()}
            />;
        }
        return (
            <div className={'project-list'}>
                <Title tag='h2'>{project.reference_code + ': ' + project.title}</Title>
            </div>
        );
    }
}

const mapStateToProjectListProps = (state, {match}) => {
    const projectId = match.params.projectId || null;
    return {
        project: reducers.getProject(state, projectId),
        isFetching: reducers.getProjectIsFetching(state),
        errorMessage: reducers.getProjectFetchErrorMessage(state),
        projectId
    };
};

ProjectDetail = withRouter(connect(mapStateToProjectListProps, actions)(ProjectDetail));

export default ProjectDetail;
