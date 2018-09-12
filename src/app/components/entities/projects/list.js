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
        const {fetchProjects} = this.props;
        fetchProjects({params: {with: 'company', ordering: '-created_at'}})
            .then(() => console.log('done!'));
    }

    render() {
        const {projects, errorMessage, isFetching, pagination, paginateProjects} = this.props;
        if(isFetching || !projects.length) {
            return <p>Loading...</p>;
        }
        if(errorMessage && !projects.length) {
            return <FetchError message={errorMessage}
                               onRetry={() => this.fetchData()}/>;
        }
        return (
            <div className='project-list'>
                <Title tag='h2'>Project List</Title>
                {projects.map((project) => (
                    <ListItem key={project.uuid} {...project}/>
                ))}
                <Pagination pagination={pagination}
                            paginate={paginateProjects}/>
            </div>
        );
    }
}

const mapStateToProjectsListProps = (state) => {
    return {
        projects: reducers.getProjects(state),
        isFetching: reducers.getProjectsIsFetching(state),
        errorMessage: reducers.getProjectsFetchErrorMessage(state),
        pagination: reducers.getProjectsPagination(state),
    };
};

const ProjectList = connect(mapStateToProjectsListProps, actions)(List);

export default ProjectList;
