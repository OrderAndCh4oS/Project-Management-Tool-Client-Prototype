import {combineReducers} from 'redux';
import auth, * as fromAuth from './auth';

const app = combineReducers({
    auth: auth(),
});

const rootReducer = combineReducers({
    app
});

export default rootReducer;

export const getAuth = (state) => fromAuth.getAuth(state.app.auth);
export const isFetchingAuth = (state) => fromAuth.isFetching(state.app.auth);
export const authErrorMessage = (state) => fromAuth.errorMessage(state.app.auth);
export const authInvalidRequest = (state) => fromAuth.invalidRequest(state.app.auth);
