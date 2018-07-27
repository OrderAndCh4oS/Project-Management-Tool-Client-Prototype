/* eslint-disable react/prop-types */
import React from 'react';
import {Title} from './elements/typography';
import {LinkButton} from './elements/button';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome/index.es';

const ProjectListItem = (props) => <div className='list-item project-list-item'>
    <Title tag='h3'>{props.reference_code + ': ' + props.title}</Title>
    <p>{props.company.name}</p>
    <LinkButton to={'/project/' + props.id}
                iconRight={<FontAwesomeIcon icon={['far', 'arrow-right']}/>}>View</LinkButton>
</div>;

export default ProjectListItem;
