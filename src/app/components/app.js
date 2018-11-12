/* eslint-disable react/prop-types */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Column, Container, Row } from './elements/structure';
import { Title } from './elements/typography';
import LoginPage from './login-page';
import { userIsAuthenticated, userIsNotAuthenticated } from '../authentication';
import MainNavigation from './navigation/main-navigation';
import DashboardPage from './dashboard-page';
import JobDetail from './entities/jobs/detail';
import ProjectDetail from './entities/projects/detail';
import CompanyDetail from './entities/companies/detail';

const App = () => (
    <div className="page-wrapper">
        <div className="page-content">
            <Container>
                <Row>
                    <Column span={6}>
                        <Title tag='h2'>Site Title</Title>
                    </Column>
                    <Column span={6}>
                        <MainNavigation/>
                    </Column>
                </Row>
            </Container>
            <Switch>
                <Route exact path="/login" component={userIsNotAuthenticated(LoginPage)}/>
                <Route exact path="/" component={userIsAuthenticated(DashboardPage)}/>
                <Route
                    exact
                    path="/company/:uuid"
                    component={userIsAuthenticated(CompanyDetail)}
                />
                <Route
                    exact path="/project/:uuid"
                       component={userIsAuthenticated(ProjectDetail)}/>
                <Route
                    exact path="/job/:uuid"
                    component={userIsAuthenticated(JobDetail)}/>
            </Switch>
        </div>
    </div>
);

export default App;
