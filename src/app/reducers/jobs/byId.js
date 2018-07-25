import * as types from '../../actions/types';

const byId = (state = {}, action) => {
    if (action.type === types.JOBS_FETCH.SUCCESS && action.data) {
        return {
            ...state,
            ...action.data.entities.jobs
        };
    }
    return state;
};

export default byId;

export const getJob = (state, id) => state.byId[id];