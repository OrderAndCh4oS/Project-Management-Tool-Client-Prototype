import * as types from './types';
import * as fromReducers from '../reducers';
import * as apiCalls from '../api';
import * as schema from '../schema';
import getEntities from '../api/get-entities';

const fetchToken = getEntities(apiCalls.fetchToken,
    fromReducers.getIsFetchingAuth, types.CREDENTIALS_FETCH);

const fetchCompanies = getEntities(apiCalls.fetchCompanies,
    fromReducers.getCompaniesIsFetching, types.COMPANIES_FETCH,
    schema.arrayOfCompanies);
const fetchCompany = getEntities(apiCalls.fetchCompany,
    fromReducers.getCompanyIsFetching, types.COMPANY_FETCH, schema.company);
const postCompany = getEntities(apiCalls.postCompany,
    fromReducers.getCompanyIsFetching, types.COMPANY_FETCH, schema.company);
const paginateCompanies = getEntities(apiCalls.paginate,
    fromReducers.getCompaniesIsFetching, types.COMPANIES_FETCH,
    schema.arrayOfCompanies);

const fetchProjects = getEntities(apiCalls.fetchProjects,
    fromReducers.getProjectsIsFetching, types.PROJECTS_FETCH,
    schema.arrayOfProjects);
const fetchProject = getEntities(apiCalls.fetchProject,
    fromReducers.getProjectIsFetching, types.PROJECT_FETCH, schema.project);
const postProject = getEntities(apiCalls.postProject,
    fromReducers.getProjectIsFetching, types.PROJECT_FETCH, schema.project);
const paginateProjects = getEntities(apiCalls.paginate,
    fromReducers.getProjectsIsFetching, types.PROJECTS_FETCH,
    schema.arrayOfProjects);

const fetchJobs = getEntities(apiCalls.fetchJobs,
    fromReducers.getJobsIsFetching,
    types.JOBS_FETCH, schema.arrayOfJobs);
const fetchJob = getEntities(apiCalls.fetchJob, fromReducers.getJobIsFetching,
    types.JOB_FETCH, schema.job);
const paginateJobs = getEntities(apiCalls.paginate,
    fromReducers.getJobsIsFetching, types.JOBS_FETCH,
    schema.arrayOfJobs);

export {
    fetchToken,
    fetchProjects,
    fetchProject,
    postProject,
    paginateProjects,
    fetchCompanies,
    fetchCompany,
    postCompany,
    paginateCompanies,
    fetchJobs,
    fetchJob,
    paginateJobs,
};
