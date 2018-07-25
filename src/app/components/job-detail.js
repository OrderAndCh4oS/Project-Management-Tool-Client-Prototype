/* eslint-disable react/prop-types */
import React from 'react';
import {Title} from './typography';

const JobDetail = (props) => <div className='job-detail'>
    <Title tag='h3'>{props.reference_code + ': ' + props.title}</Title>
    <p>{props.description}</p>
</div>;

export default JobDetail;
