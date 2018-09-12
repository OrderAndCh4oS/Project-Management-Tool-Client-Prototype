import * as types from '../../actions/types';

const byId = (state = {}, action) => {
    switch(action.type) {
        case types.COMPANIES_FETCH.SUCCESS:
        case types.COMPANY_FETCH.SUCCESS:
            return {
                ...action.data.entities.companies,
                ...state,
            };
        default:
            return state;
    }
};

export default byId;

export const getCompany = (state, id) => state.byId[id];
