/* eslint-disable react/prop-types */
import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Column, Container, Row} from './structure';
import {Title} from './typography';
import LoginPage from './login-page';
import {userIsAuthenticated, userIsNotAuthenticated} from '../authentication';
import MainNavigation from './navigation/main-navigation';
import DashboardPage from './dashboard-page';

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
            <Container>
                <Switch>
                    <Route exact path="/" component={userIsAuthenticated(DashboardPage)}/>
                    <Route exact path="/login" component={userIsNotAuthenticated(LoginPage)}/>
                </Switch>
            </Container>
        </div>
    </div>
);

export default App;
