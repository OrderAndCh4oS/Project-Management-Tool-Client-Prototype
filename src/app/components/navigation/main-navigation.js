/* eslint-disable react/prop-types */
import React from 'react';
import {connect} from 'react-redux';
import {CREDENTIALS_LOGOUT} from '../../actions/types';
import {NavLink} from 'react-router-dom';

const isActiveFunc = (match) => {
    return match;
};

const adminNavigation = (loggedIn, logout) => {
    if (loggedIn) {
        return (
            <div>
                <NavLink strict isActive={isActiveFunc} activeClassName="active" to="/">Dashboard</NavLink>
                <button onClick={logout}>Logout</button>
            </div>
        );
    } else {
        return (
            <NavLink strict isActive={isActiveFunc} activeClassName="active" to="/login">Login</NavLink>
        );
    }
};

let MainNavigation = ({loggedIn, logout}) => (
    <nav className="main-nav">
        {adminNavigation(loggedIn, logout)}
    </nav>
);

MainNavigation = connect(
    state => {
        return {
            loggedIn: state.app.auth.isAuthenticated
        };
    },
    dispatch => {
        return {
            logout: () => dispatch({type: CREDENTIALS_LOGOUT})
        };
    }
)(MainNavigation);

export default MainNavigation;