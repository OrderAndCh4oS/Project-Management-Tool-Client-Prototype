/* eslint-disable react/prop-types */
import React from 'react';
import { Title } from '../../elements/typography';
import { LinkButton } from '../../elements/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/index.es';

const CompanyListItem = (props) => <div className='list-item company-list-item'>
    <Title tag='h3'>{props.name}</Title>
    <LinkButton
        to={'/company/' + props.uuid} iconRight={<FontAwesomeIcon
        icon={['far', 'arrow-right']}/>}>View</LinkButton>
</div>;

export default CompanyListItem;
