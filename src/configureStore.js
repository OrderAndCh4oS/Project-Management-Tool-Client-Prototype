import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import rootReducer from './app/reducers/index';

const configureStore = () => {
    const middleware = [thunk];
    // eslint-disable-next-line no-undef
    if (process.env.NODE_ENV !== 'production') {
        middleware.push(createLogger());
    }

    const token = !!localStorage.getItem('TOKEN');
    const initialStore = {app: {auth: {isAuthenticated: token}}};

    return createStore(rootReducer, initialStore, applyMiddleware(...middleware));
};

export default configureStore;
