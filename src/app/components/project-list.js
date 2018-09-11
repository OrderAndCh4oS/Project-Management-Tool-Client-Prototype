/* eslint-disable no-class-assign,react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Title } from './elements/typography';
import FetchError from './elements/fetch-error';
import ProjectListItem from './project-list-item';
import * as actions from '../actions';
import * as reducers from '../reducers';
import ProjectForm from './project-form';
import { Button } from './elements/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/index.es';

class ProjectList extends Component {

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        const {fetchProjects} = this.props;
        fetchProjects({params: {with: 'company', ordering: '-created_at'}})
            .then(() => console.log('done!'));
    }

    next = () => {
        const {paginateProjects, pagination} = this.props;
        paginateProjects({url: pagination.next});
    };

    prev = () => {
        const {paginateProjects, pagination} = this.props;
        paginateProjects({url: pagination.prev});
    };

    render() {
        const {projects, errorMessage, isFetching, pagination} = this.props;
        if(isFetching || !projects.length) {
            return <p>Loading...</p>;
        }
        if(errorMessage && !projects.length) {
            return <FetchError message={errorMessage}
                               onRetry={() => this.fetchData()}/>;
        }
        return (
            <div className={'project-list'}>
                <Title tag='h2'>Project List</Title>
                <ProjectForm/>
                {projects.map((project) => (
                    <ProjectListItem key={project.id} {...project}/>
                ))}
                <div className='pagination'>
                    {pagination.prev
                        ? <Button onClick={this.prev}
                                  iconRight={<FontAwesomeIcon
                                      icon={['far', 'arrow-left']}/>}>
                            Prev
                        </Button>
                        : null}
                    {pagination.next
                        ? <Button onClick={this.next}
                                  iconRight={<FontAwesomeIcon
                                      icon={['far', 'arrow-right']}/>}>
                            Next
                        </Button>
                        : null}
                </div>
            </div>
        );
    }
}

const mapStateToProjectsListProps = (state) => {
    return {
        projects: reducers.getProjects(state),
        isFetching: reducers.getProjectsIsFetching(state),
        errorMessage: reducers.getProjectsFetchErrorMessage(state),
        pagination: reducers.getProjectPagination(state),
    };
};

ProjectList = connect(mapStateToProjectsListProps, actions)(ProjectList);

export default ProjectList;
