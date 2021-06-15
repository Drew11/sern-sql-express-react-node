import {LOADING_FAILURE} from '../constants/index';

function errorReducer(state = null, action) {
    switch (action.type) {
        case LOADING_FAILURE:
            return action.payload;
        default:
            return state
    }
}

export default errorReducer;