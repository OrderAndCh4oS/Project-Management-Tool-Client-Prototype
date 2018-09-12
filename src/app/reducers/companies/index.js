import { combineReducers } from 'redux';
import byId, * as fromById from './byId';
import list, * as fromList from './list';

const companies = combineReducers({byId, list});

export default companies;

export const getCompanies = (state) => {
    const ids = getIds(state);
    return ids.map(id => fromById.getCompany(state.companies, id));
};

export const getIds = (state) => fromList.getIds(state.companies);
export const getPagination = (state) => fromList.getPagination(state.companies);
export const getIsFetching = (state) => fromList.getIsFetching(state.companies);
export const getFetchErrorMessage = (state) => fromList.getFetchErrorMessage(
    state.companies);
export const getIsFetchingSingle = (state) => fromList.getIsFetchingSingle(
    state.companies);
export const getFetchSingleInvalidRequest = (state) => fromList.getFetchSingleInvalidRequest(
    state.companies);
export const getFetchSingleErrorMessage = (state) => fromList.getFetchSingleErrorMessage(
    state.companies);
export const getCompany = (state, id) => fromById.getCompany(state.companies,
    id);
