import * as types from './types';
import * as fromReducers from '../reducers';
import * as apiCalls from '../api';
import * as schema from '../schema';
import fetchData from './fetch';

const fetchToken = fetchData(apiCalls.fetchToken, fromReducers.getIsFetchingAuth, types.CREDENTIALS_FETCH);
const fetchProjects = fetchData(apiCalls.fetchProjects, fromReducers.getProjectsIsFetching, types.PROJECTS_FETCH, schema.arrayOfProjects);
const fetchJobs = fetchData(apiCalls.fetchJobs, fromReducers.getJobsIsFetching, types.JOBS_FETCH, schema.arrayOfJobs);

const fetchProject = fetchData(apiCalls.fetchProject, fromReducers.getProjectIsFetching, types.PROJECT_FETCH, schema.project);
const postProject = fetchData(apiCalls.postProject,
    fromReducers.getProjectIsFetching, types.PROJECT_FETCH, schema.project);
const fetchJob = fetchData(apiCalls.fetchJob, fromReducers.getJobIsFetching, types.JOB_FETCH, schema.job);

export {
    fetchToken,
    fetchProjects,
    fetchJobs,
    fetchJob,
    fetchProject,
    postProject,
};
