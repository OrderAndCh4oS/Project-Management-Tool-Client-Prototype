/* eslint-disable react/prop-types */
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome/';
import {Title} from './elements/typography';
import {LinkButton} from './elements/button';

const JobListItem = (props) => <div className='list-item job-list-item'>
    <Title tag='h3'>{props.reference_code + ': ' + props.title}</Title>
    <p>{props.description}</p>
    <LinkButton to={'/job/' + props.id} iconRight={<FontAwesomeIcon icon={['far', 'arrow-right']}/>}>View</LinkButton>
</div>;

export default JobListItem;
