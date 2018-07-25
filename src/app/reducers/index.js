import {combineReducers} from 'redux';
import auth, * as fromAuth from './auth';
import projects, * as fromProjects from './projects';

const app = combineReducers({
    auth,
    projects
});

const rootReducer = combineReducers({
    app
});

export default rootReducer;

export const getToken = (state) => fromAuth.getAuth(state.app.auth.data.token);
export const getAuth = (state) => fromAuth.getAuth(state.app.auth);
export const getIsFetchingAuth = (state) => fromAuth.getIsFetching(state.app.auth);
export const getAuthErrorMessage = (state) => fromAuth.getErrorMessage(state.app.auth);
export const getAuthInvalidRequest = (state) => fromAuth.getInvalidRequest(state.app.auth);

export const getProject = (state) => fromProjects.getProject(state.app);
export const getProjects = (state) => fromProjects.getProjects(state.app);
export const getProjectIsFetching = (state) => fromProjects.getIsFetching(state.app);
export const getProjectFetchErrorMessage = (state) => fromProjects.getFetchErrorMessage(state.app);