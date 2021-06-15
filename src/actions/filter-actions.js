import { SET_QUERY } from '../constants/index';

export function setQuery ( query ) {
    return {
        type: SET_QUERY,
        payload: query
    };
}
