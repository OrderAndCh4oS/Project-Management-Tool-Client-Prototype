/* eslint-disable react/prop-types */
import React from 'react';
import {Title} from './elements/typography';
import {LinkButton} from './elements/button';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome/index.es';

const ProjectDetail = (props) => <div className='list-detail project-list-detail'>
    <Title tag='h3'>{props.reference_code + ': ' + props.title}</Title>
    <p>{props.company.name}</p>
    <LinkButton to={'/project/' + props.id}
                iconRight={<FontAwesomeIcon icon={['far', 'arrow-right']}/>}>View</LinkButton>
</div>;

export default ProjectDetail;
