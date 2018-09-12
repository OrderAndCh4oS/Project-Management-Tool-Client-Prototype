import * as types from '../../actions/types';

const byId = (state = {}, action) => {
    switch(action.type) {
        case types.STATUSES_FETCH.SUCCESS:
        case types.STATUS_FETCH.SUCCESS:
            return {
                ...action.data.entities.projects,
                ...state,
            };
        default:
            return state;
    }
};

export default byId;

export const getStatus = (state, id) => state.byId[id];
