import {combineReducers} from 'redux';
import auth, * as fromAuth from './auth';
import projects, * as fromProjects from './projects';
import jobs, * as fromJobs from './jobs';

const app = combineReducers({
    auth,
    projects,
    jobs
});

const rootReducer = combineReducers({
    app
});

export default rootReducer;

export const getAuth = (state) => fromAuth.getAuth(state.app.auth);
export const getIsFetchingAuth = (state) => fromAuth.getIsFetching(state.app.auth);
export const getAuthErrorMessage = (state) => fromAuth.getErrorMessage(state.app.auth);
export const getAuthInvalidRequest = (state) => fromAuth.getInvalidRequest(state.app.auth);

export const getProject = (state, id) => fromProjects.getProject(state.app, id);
export const getProjects = (state) => fromProjects.getProjects(state.app);
export const getProjectsIsFetching = (state) => fromProjects.getIsFetching(state.app);
export const getProjectsFetchErrorMessage = (state) => fromProjects.getFetchErrorMessage(state.app);
export const getProjectIsFetching = (state) => fromProjects.getIsFetchingSingle(state.app);
export const getProjectFetchErrorMessage = (state) => fromProjects.getFetchSingleErrorMessage(state.app);

export const getJob = (state, id) => fromJobs.getJob(state.app, id);
export const getJobs = (state) => fromJobs.getJobs(state.app);
export const getJobsIsFetching = (state) => fromJobs.getIsFetching(state.app);
export const getJobsFetchErrorMessage = (state) => fromJobs.getFetchErrorMessage(state.app);
export const getJobIsFetching = (state) => fromJobs.getIsFetchingSingle(state.app);
export const getJobFetchErrorMessage = (state) => fromJobs.getFetchSingleErrorMessage(state.app);