import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader';

import App from './app';

const Root = ({store}) => (
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);

// eslint-disable-next-line no-undef
export default hot(module)(Root);
