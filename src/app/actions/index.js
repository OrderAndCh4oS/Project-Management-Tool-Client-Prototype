import * as types from './types';
import * as fromReducers from '../reducers';
import * as apiCalls from '../api';
import * as schema from '../schema';
import fetchData from './fetch';

const fetchToken = fetchData(apiCalls.fetchToken, fromReducers.getIsFetchingAuth, types.CREDENTIALS_FETCH);
const fetchProjects = fetchData(apiCalls.fetchProjects, fromReducers.getProjectIsFetching, types.PROJECTS_FETCH, schema.arrayOfProjects);
const fetchJobs = fetchData(apiCalls.fetchJobs, fromReducers.getJobIsFetching, types.JOBS_FETCH, schema.arrayOfJobs);

export {fetchToken, fetchProjects, fetchJobs};
