/* eslint-disable indent */

const baseURL = 'http://localhost:8000';

const listValues = (params, key) => Array.isArray(params[key]) ? params[key].join(',') : params[key];
const createParams = (params) => Object.keys(params).map(key => key + '=' + listValues(params, key)).join('&');


export const fetchToken = ({username, password}) => {
    return fetch(baseURL + '/api-token-auth/', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({username: username, password: password})
    });
};

export const fetchProjects = (values, token, params = null) => {
    params = params ? '?' + createParams(params) : '';
    return fetch(baseURL + '/project/' + params, {
        method: 'get',
        headers: {
            'Authorization': 'JWT ' + token
        }
    });
};

export const fetchJobs = (values, token, params = null) => {
    params = params ? '?' + createParams(params) : '';
    return fetch(baseURL + '/job/' + params, {
        method: 'get',
        headers: {
            'Authorization': 'JWT ' + token
        }
    });
};

// export const fetchPoll = (id, token) => {
//     return fetch(baseURL + '/questions/' + id + '/', {
//         headers: {
//             'Authorization': 'JWT ' + token
//         }
//     });
// };
//
// export const postPoll = (questionText, category, token) => {
//     console.log(category);
//     return fetch(baseURL + '/questions/', {
//         method: 'post',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//             'Authorization': 'JWT ' + token
//         },
//         body: JSON.stringify({question_text: questionText, category: category})
//     });
// };