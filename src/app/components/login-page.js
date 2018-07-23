import React from 'react';
import {Pretitle, Title} from './typography';
import {Column} from './structure';
import LoginForm from './login-form';

const LoginPage = () => (
    <Column>
        <Pretitle>Who are you</Pretitle>
        <Title>Login</Title>
        <LoginForm/>
    </Column>
);

export default LoginPage;
