import React from 'react';
import {Pretitle, Title} from './typography';
import {Column, Container, Row} from './structure';
import ProjectList from './project-list';
import JobList from './job-list';

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
                <ProjectList/>
            </Column>
            <Column span={8}>
                <JobList/>
            </Column>
        </Row>
    </Container>
);

export default DashboardPage;