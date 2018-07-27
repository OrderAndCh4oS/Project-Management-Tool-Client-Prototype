import React from 'react';
import {Pretitle, Title} from './elements/typography';
import {Column} from './elements/structure';
import LoginForm from './login-form';

const LoginPage = () => (
    <Column>
        <Pretitle>Who are you</Pretitle>
        <Title>Login</Title>
        <LoginForm/>
    </Column>
);

export default LoginPage;
