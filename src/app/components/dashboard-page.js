import React from 'react';
import { Pretitle, Title } from './elements/typography';
import { Column, Container, Row } from './elements/structure';
import JobList from './entities/jobs/list';
import ProjectList from './entities/projects/list';
import ProjectForm from './entities/projects/form';
import CompanyList from './entities/companies/list';
import CompanyForm from './entities/companies/form';

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
                <CompanyForm/>
                <CompanyList/>
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
