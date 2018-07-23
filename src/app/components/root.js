import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {PropTypes} from 'prop-types';
import {hot} from 'react-hot-loader';

import App from './app';

const Root = ({store}) => (
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);

Root.propTypes = {
    store: PropTypes.object.isRequired
};

// eslint-disable-next-line no-undef
export default hot(module)(Root);
