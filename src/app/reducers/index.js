import { combineReducers } from 'redux';
import auth, * as fromAuth from './auth';
import projects, * as fromProjects from './projects';
import companies, * as fromCompanies from './companies';
import jobs, * as fromJobs from './jobs';
import staffMembers, * as fromStaffMembers from './staff-members';
import statuses, * as fromStatuses from './statuses';

const app = combineReducers({
    auth,
    projects,
    jobs,
    companies,
    statuses,
    staffMembers,
});

const rootReducer = combineReducers({
    app
});

export default rootReducer;

export const getAuth = (state) =>
    fromAuth.getAuth(state.app.auth);
export const getIsFetchingAuth = (state) =>
    fromAuth.getIsFetching(state.app.auth);
export const getAuthErrorMessage = (state) =>
    fromAuth.getErrorMessage(state.app.auth);
export const getAuthInvalidRequest = (state) =>
    fromAuth.getInvalidRequest(state.app.auth);

export const getProject = (state, id) =>
    fromProjects.getProject(state.app, id);
export const getProjectsPagination = (state) =>
    fromProjects.getPagination(state.app);
export const getProjects = (state) =>
    fromProjects.getProjects(state.app);
export const getProjectsIsFetching = (state) =>
    fromProjects.getIsFetching(state.app);
export const getProjectsFetchErrorMessage = (state) =>
    fromProjects.getFetchErrorMessage(state.app);
export const getProjectIsFetching = (state) =>
    fromProjects.getIsFetchingSingle(state.app);
export const getProjectFetchInvalidRequest = (state) =>
    fromProjects.getFetchSingleInvalidRequest(state.app);
export const getProjectFetchErrorMessage = (state) =>
    fromProjects.getFetchSingleErrorMessage(state.app);

export const getJob = (state, id) =>
    fromJobs.getJob(state.app, id);
export const getJobsPagination = (state) =>
    fromJobs.getPagination(state.app);
export const getJobs = (state) =>
    fromJobs.getJobs(state.app);
export const getJobsIsFetching = (state) =>
    fromJobs.getIsFetching(state.app);
export const getJobsFetchErrorMessage = (state) =>
    fromJobs.getFetchErrorMessage(state.app);
export const getJobIsFetching = (state) =>
    fromJobs.getIsFetchingSingle(state.app);
export const getJobFetchErrorMessage = (state) =>
    fromJobs.getFetchSingleErrorMessage(state.app);
export const getJobFetchInvalidRequest = (state) =>
    fromJobs.getFetchSingleInvalidRequest(state.app);

export const getCompany = (state, id) =>
    fromCompanies.getCompany(state.app, id);
export const getCompaniesPagination = (state) =>
    fromCompanies.getPagination(state.app);
export const getCompanies = (state) =>
    fromCompanies.getCompanies(state.app);
export const getCompaniesIsFetching = (state) =>
    fromCompanies.getIsFetching(state.app);
export const getCompaniesFetchErrorMessage = (state) =>
    fromCompanies.getFetchErrorMessage(state.app);
export const getCompanyIsFetching = (state) =>
    fromCompanies.getIsFetchingSingle(state.app);
export const getCompanyFetchInvalidRequest = (state) =>
    fromCompanies.getFetchSingleInvalidRequest(state.app);
export const getCompanyFetchErrorMessage = (state) =>
    fromCompanies.getFetchSingleErrorMessage(state.app);

export const getStatus = (state, id) =>
    fromStatuses.getStatus(state.app, id);
export const getStatusesPagination = (state) =>
    fromStatuses.getPagination(state.app);
export const getStatuses = (state) =>
    fromStatuses.getStatuses(state.app);
export const getStatusesIsFetching = (state) =>
    fromStatuses.getIsFetching(state.app);
export const getStatusesFetchErrorMessage = (state) =>
    fromStatuses.getFetchErrorMessage(state.app);
export const getStatusIsFetching = (state) =>
    fromStatuses.getIsFetchingSingle(state.app);
export const getStatusFetchInvalidRequest = (state) =>
    fromStatuses.getFetchSingleInvalidRequest(state.app);
export const getStatusFetchErrorMessage = (state) =>
    fromStatuses.getFetchSingleErrorMessage(state.app);

export const getStaffMember = (state, id) =>
    fromStaffMembers.getStaffMember(state.app, id);
export const getStaffMembersPagination = (state) =>
    fromStaffMembers.getPagination(state.app);
export const getStaffMembers = (state) =>
    fromStaffMembers.getStaffMembers(state.app);
export const getStaffMembersIsFetching = (state) =>
    fromStaffMembers.getIsFetching(state.app);
export const getStaffMembersFetchErrorMessage = (state) =>
    fromStaffMembers.getFetchErrorMessage(state.app);
export const getStaffMemberIsFetching = (state) =>
    fromStaffMembers.getIsFetchingSingle(state.app);
export const getStaffMemberFetchInvalidRequest = (state) =>
    fromStaffMembers.getFetchSingleInvalidRequest(state.app);
export const getStaffMemberFetchErrorMessage = (state) =>
    fromStaffMembers.getFetchSingleErrorMessage(state.app);
