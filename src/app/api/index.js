/* eslint-disable indent */

const baseURL = 'http://localhost:8000';

export const fetchToken = ({values: {username, password}}) => {
    return postUnauthorisedFetch('/api-token-auth/', {username: username, password: password});
};

export const fetchProjects = ({params}) => {
    params = params ? '?' + createParams(params) : '';
    return getAuthorisedFetch('/project/' + params);
};

export const fetchJobs = ({params}) => {
    params = params ? '?' + createParams(params) : '';
    return getAuthorisedFetch('/job/' + params);
};

export const fetchJob = ({id}) => {
    return getAuthorisedFetch('/job/' + id + '/');
};

export const fetchProject = ({id}) => {
    return getAuthorisedFetch('/project/' + id + '/');
};

const listValues = (params, key) => Array.isArray(params[key]) ? params[key].join(',') : params[key];
const createParams = (params) => Object.keys(params).map(key => key + '=' + listValues(params, key)).join('&');

const getAuthorisedFetch = function (endpoint) {
    let token = localStorage.getItem('TOKEN') ? localStorage.getItem('TOKEN') : null;
    return fetch(baseURL + endpoint, {
        method: 'get',
        headers: {
            'Authorization': 'JWT ' + token
        }
    });
};

const postUnauthorisedFetch = function (endpoint, data) {
    return fetch(baseURL + endpoint, {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
};
// eslint-disable-next-line no-unused-vars
const postAuthorisedFetch = function (endpoint, data) {
    let token = localStorage.getItem('TOKEN') ? localStorage.getItem('TOKEN') : null;
    return fetch(baseURL + endpoint, {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'JWT ' + token
        },
        body: JSON.stringify(data)
    });
};
