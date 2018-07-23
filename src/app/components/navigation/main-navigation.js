/* eslint-disable react/prop-types */
import React from 'react';
import {connect} from 'react-redux';
import {CREDENTIALS_LOGOUT} from '../../actions/types';
import {NavLink} from 'react-router-dom';

const isActiveFunc = (match) => {
    return match;
};

const adminNavigation = (loggedIn) => {
    if (loggedIn) {
        return (
            <NavLink strict isActive={isActiveFunc} activeClassName="active" to="/">Dashboard</NavLink>
        );
    }
};

let MainNavigation = ({loggedIn, logout}) => (
    <nav className="main-nav">
        {adminNavigation(loggedIn)}
        {loggedIn !== null ? <button onClick={logout}>Logout</button> : <NavLink strict isActive={isActiveFunc} activeClassName="active" to="/login">Login</NavLink>}
    </nav>
);

MainNavigation = connect(
    state => {
        return {
            loggedIn: state.app.auth.data
        };
    },
    dispatch => {
        return {
            logout: () => dispatch({type: CREDENTIALS_LOGOUT})
        };
    }
)(MainNavigation);

export default MainNavigation;