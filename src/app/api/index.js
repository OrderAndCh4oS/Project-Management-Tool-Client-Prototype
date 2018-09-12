/* eslint-disable indent */

const baseURL = 'http://localhost:8000';

export const fetchToken = ({values: {username, password}}) => {
    return postUnauthorisedFetch('/api-token-auth/', {username, password});
};

export const fetchProjects = ({params}) => {
    params = params ? '?' + createParams(params) : '';
    return getAuthorisedFetch('/project/' + params);
};

export const fetchProject = ({id}) => {
    return getAuthorisedFetch('/project/' + id + '/');
};

export const postProject = ({values}) => {
    return postAuthorisedFetch('/project/', values);
};

export const fetchCompanies = ({params}) => {
    params = params ? '?' + createParams(params) : '';
    return getAuthorisedFetch('/company/' + params);
};

export const fetchCompany = ({id}) => {
    return getAuthorisedFetch('/company/' + id + '/');
};

export const postCompany = ({values}) => {
    return postAuthorisedFetch('/company/', values);
};

export const fetchJobs = ({params}) => {
    params = params ? '?' + createParams(params) : '';
    return getAuthorisedFetch('/job/' + params);
};

export const fetchAddressForm = () => {
    return getAuthorisedFetch('/address-form/');
};

export const fetchClientForm = () => {
    return getAuthorisedFetch('/client-form/');
};

export const fetchCompanyForm = () => {
    return getAuthorisedFetch('/company-form/');
};

export const fetchJob = ({id}) => {
    return getAuthorisedFetch('/job/' + id + '/');
};

export const paginate = ({url}) => {
    return getAuthorisedFetch(url, false);
};

const getTokenFromLocalStorage = () => localStorage.getItem('TOKEN') ? localStorage.getItem('TOKEN') : null;
const listValues = (params, key) => Array.isArray(params[key]) ? params[key].join(',') : params[key];
const createParams = (params) => Object.keys(params).map(key => key + '=' + listValues(params, key)).join('&');

const getAuthorisedFetch = function(endpoint, withBase = true) {
    let token = getTokenFromLocalStorage();
    const url = withBase ? baseURL + endpoint : endpoint;
    return fetch(url, {
        method: 'get',
        headers: {
            'Authorization': 'JWT ' + token
        }
    });
};

const postUnauthorisedFetch = function(endpoint, data, withBase = true) {
    const url = withBase ? baseURL + endpoint : endpoint;
    return fetch(url, {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
};

// eslint-disable-next-line no-unused-vars
const postAuthorisedFetch = function(endpoint, data, withBase = true) {
    let token = getTokenFromLocalStorage();
    const url = withBase ? baseURL + endpoint : endpoint;
    return fetch(url, {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'JWT ' + token
        },
        body: JSON.stringify(data)
    });
};
