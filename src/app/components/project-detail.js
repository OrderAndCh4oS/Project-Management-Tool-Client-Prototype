/* eslint-disable react/prop-types */
import React from 'react';
import {Title} from './typography';

const ProjectDetail = (props) => <div className='project-detail'>
    <Title tag='h3'>{props.reference_code}</Title>
    <p>{props.company.name}</p>
</div>;

export default ProjectDetail;