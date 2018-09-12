import * as types from '../../actions/types';

const byId = (state = {}, action) => {
    switch(action.type) {
        case types.STAFF_MEMBERS_FETCH.SUCCESS:
        case types.STAFF_MEMBER_FETCH.SUCCESS:
            return {
                ...action.data.entities.projects,
                ...state,
            };
        default:
            return state;
    }
};

export default byId;

export const getStaffMember = (state, id) => state.byId[id];
