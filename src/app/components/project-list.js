/* eslint-disable no-class-assign,react/prop-types */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Title} from './typography';

class ProjectList extends Component {
    render() {
        const {dispatch} = this.props;
        dispatch({type: 'GET_PROJECT_LIST'});
        return (
            <div className={'project-list'}>
                <Title tag='h2'>Project List</Title>
                <p>...</p>
            </div>
        );
    }
}

ProjectList = connect()(ProjectList);

export default ProjectList;
