import React from 'react';
import {Pretitle, Title} from './typography';
import {Column, Container, Row} from './structure';
import ProjectList from './project-list';

const DashboardPage = () => (
    <Container>
        <Row>
            <Column>
                <Pretitle>Welcome</Pretitle>
                <Title>Dashboard</Title>
            </Column>
        </Row>
        <Row>
            <Column>
                <ProjectList/>
            </Column>
        </Row>
    </Container>
);

export default DashboardPage;