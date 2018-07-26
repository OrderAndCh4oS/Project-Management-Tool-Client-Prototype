import React from 'react';
import ReactDOM from 'react-dom';

import Root from './app/components/root';
import configureStore from './configureStore';

import {library} from '@fortawesome/fontawesome-svg-core';
import {faBell, faCoffee} from '@fortawesome/pro-solid-svg-icons';

import './sass/main.scss';

library.add(faBell, faCoffee);

const store = configureStore();

ReactDOM.render(
    <Root store={store}/>,
    document.getElementById('root')
);
