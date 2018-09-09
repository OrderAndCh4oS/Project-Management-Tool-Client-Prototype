import * as types from '../../actions/types';

const byId = (state = {}, action) => {
    switch (action.type) {
        case types.PROJECTS_FETCH.SUCCESS:
        case types.PROJECT_FETCH.SUCCESS:
            return {
                ...action.data.entities.projects,
                ...state,
            };
        default:
            return state;
    }
};

export default byId;

export const getProject = (state, id) => state.byId[id];
