import React from 'react';
import { Pretitle, Title } from './elements/typography';
import { Column, Container, Row } from './elements/structure';
import ProjectList from './project-list';
import JobList from './job-list';
import ProjectForm from './project-form';

const DashboardPage = () => (
    <Container>
        <Row>
            <Column>
                <Pretitle>Welcome</Pretitle>
                <Title>Dashboard</Title>
            </Column>
        </Row>
        <Row>
            <Column span={4}>
                <ProjectForm/>
                <ProjectList/>
            </Column>
            <Column span={8}>
                <JobList/>
            </Column>
        </Row>
    </Container>
);

export default DashboardPage;
