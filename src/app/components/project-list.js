/* eslint-disable no-class-assign,react/prop-types */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Title} from './typography';
import FetchError from './fetch-error';
import ProjectDetail from './project-detail';
import * as actions from '../actions';
import * as reducers from '../reducers';

class ProjectList extends Component {

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        const {fetchProjects} = this.props;
        fetchProjects(null, {params: {with: 'company'}}).then(() => console.log('done!'));
    }

    render() {
        const {projects, errorMessage, isFetching} = this.props;
        if (isFetching && !projects.length) {
            return <p>Loading...</p>;
        }
        if (errorMessage && !projects.length) {
            return <FetchError
                message={errorMessage}
                onRetry={() => this.fetchData()}
            />;
        }
        return (
            <div className={'project-list'}>
                <Title tag='h2'>Project List</Title>
                {projects.map((poll) => (
                    <ProjectDetail key={poll.id} {...poll}/>
                ))}
            </div>
        );
    }
}

const mapStateToProjectsListProps = (state) => {
    return {
        projects: reducers.getProjects(state),
        token: reducers.getToken(state),
        isFetching: reducers.getProjectIsFetching(state),
        errorMessage: reducers.getProjectFetchErrorMessage(state)
    };
};

ProjectList = connect(mapStateToProjectsListProps, actions)(ProjectList);

export default ProjectList;
