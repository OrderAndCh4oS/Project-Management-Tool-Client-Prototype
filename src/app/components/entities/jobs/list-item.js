/* eslint-disable react/prop-types */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/';
import { Date, Text, Title } from '../../elements/typography';
import { Link, LinkButton } from '../../elements/button';

const JobListItem = (props) => <div className='list-item job-list-item'>
    <Title tag='h3'>{props.reference_code + ': ' + props.title}</Title>
    <Text>Project: <Link to={'/project/' +
    props.project__id}>{props.project__title}</Link></Text>
    <Text>Estimated Time: {props.estimated_time} / Logged
          Time: {props.logged_time}</Text>
    <Text>Description: {props.description}</Text>
    <Text>Status: {props.status__title} / Deadline: <Date date={props.deadline}
                                                          format={'Do MMMM YYYY'}/></Text>
    <LinkButton
        to={'/job/' + props.uuid} iconRight={<FontAwesomeIcon
        icon={['far', 'arrow-right']}/>}>View</LinkButton>
</div>;

export default JobListItem;
