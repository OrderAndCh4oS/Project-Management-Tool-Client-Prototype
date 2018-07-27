import * as types from '../../actions/types';

const byId = (state = {}, action) => {
    switch (action.type) {
        case types.JOBS_FETCH.SUCCESS:
        case types.JOB_FETCH.SUCCESS:
            return {
                ...state,
                ...action.data.entities.jobs
            };
        default:
            return state;

    }
};

export default byId;

export const getJob = (state, id) => state.byId[id];