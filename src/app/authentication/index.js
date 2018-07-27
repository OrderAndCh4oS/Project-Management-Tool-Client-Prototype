import {connectedRouterRedirect} from 'redux-auth-wrapper/history4/redirect';
import locationHelperBuilder from 'redux-auth-wrapper/history4/locationHelper';

const userIsAuthenticated = connectedRouterRedirect({
    redirectPath: '/login',
    authenticatedSelector: state => state.app.auth.isAuthenticated === true,
    wrapperDisplayName: 'UserIsAuthenticated'
});

const locationHelper = locationHelperBuilder({});

const userIsNotAuthenticated = connectedRouterRedirect({
    redirectPath: (state, ownProps) => locationHelper.getRedirectQueryParam(ownProps) || '/',
    allowRedirectBack: false,
    authenticatedSelector: state => state.app.auth.isAuthenticated === false,
    wrapperDisplayName: 'UserIsNotAuthenticated'
});

export {userIsAuthenticated, userIsNotAuthenticated};