import {SET_QUERY} from '../constants/index';

function filterReducer(state = '', action) {
    switch (action.type) {
        case SET_QUERY:
            return action.payload;
        default:
            return state
    }
}

export default filterReducer;