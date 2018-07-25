import * as types from '../../actions/types';

const byId = (state = {}, action) => {
    if (action.type === types.PROJECTS_FETCH.SUCCESS && action.data) {
        return {
            ...state,
            ...action.data.entities.projects
        };
    }
    return state;
};

export default byId;

export const getProject = (state, id) => state.byId[id];