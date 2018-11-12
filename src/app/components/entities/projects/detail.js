/* eslint-disable no-class-assign,react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Title } from '../../elements/typography';
import FetchError from '../../elements/fetch-error';
import * as actions from '../../../actions/index';
import * as reducers from '../../../reducers/index';
import { withRouter } from 'react-router-dom';

class Detail extends Component {

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        const {fetchProject, uuid} = this.props;
        fetchProject({id: uuid, params: {with: 'company'}})
            .then(() => console.log('done!'));
    }

    render() {
        const {project, errorMessage, isFetching} = this.props;
        if(isFetching || !project) {
            return <p>Loading...</p>;
        }
        if(errorMessage && !project) {
            return <FetchError message={errorMessage}
                               onRetry={() => this.fetchData()}/>;
        }
        return (
            <div className={'project-list'}>
                <Title tag='h2'>{project.reference_code + ': ' +
                project.title}</Title>
            </div>
        );
    }
}

const mapStateToProjectListProps = (state, {match}) => {
    const uuid = match.params.uuid || null;
    return {
        project: reducers.getProject(state, uuid),
        isFetching: reducers.getProjectIsFetching(state),
        errorMessage: reducers.getProjectFetchErrorMessage(state),
        uuid: uuid,
    };
};

const ProjectDetail = withRouter(
    connect(mapStateToProjectListProps, actions)(Detail));

export default ProjectDetail;
