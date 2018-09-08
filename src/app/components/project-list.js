/* eslint-disable no-class-assign,react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Title } from './elements/typography';
import FetchError from './elements/fetch-error';
import ProjectListItem from './project-list-item';
import * as actions from '../actions';
import * as reducers from '../reducers';
import ProjectForm from './project-form';

class ProjectList extends Component {

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        const {fetchProjects} = this.props;
        fetchProjects({params: {with: 'company'}}).then(() => console.log('done!'));
    }

    render() {
        const {projects, errorMessage, isFetching} = this.props;
        if (isFetching || !projects.length) {
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
                <ProjectForm/>
                {projects.map((project) => (
                    <ProjectListItem key={project.id} {...project}/>
                ))}
            </div>
        );
    }
}

const mapStateToProjectsListProps = (state) => {
    return {
        projects: reducers.getProjects(state),
        isFetching: reducers.getProjectsIsFetching(state),
        errorMessage: reducers.getProjectsFetchErrorMessage(state)
    };
};

ProjectList = connect(mapStateToProjectsListProps, actions)(ProjectList);

export default ProjectList;
