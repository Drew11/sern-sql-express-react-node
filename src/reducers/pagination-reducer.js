import {
    SET_CURRENT_PAGE,
    SET_BUTTONS_PER_PAGE,
    SET_INDEX_FIRST_PAGE,
    SET_PAGINATION_LENGTH
} from '../constants/index';

const initialState = {
    currentPage: 1,
    usersPerPage: 50,
    buttonsPerPage: 5,
    indexFirstPage: 0,
    paginationLength: null,
};

function paginationReducer (state = initialState, action) {
    switch (action.type) {
        case SET_CURRENT_PAGE:
            const obj = {...state,
                currentPage: state.currentPage + 1
            };
            return obj;

        case SET_BUTTONS_PER_PAGE: {
            return {...state,
                buttonsPerPage: state.buttonsPerPage + action.payload
            };
        }
        case SET_INDEX_FIRST_PAGE: {
            return {...state,
                indexFirstPage: state.indexFirstPage + action.payload
            };
        }
        case SET_PAGINATION_LENGTH: {
            return {...state,
                paginationLength: action.payload
            }
        }
        case 'SET_MORE': {
            return {...state,
                more: action.payload === state.usersPerPage
            }
        }
        default:
            return state
    }
}

export default paginationReducer;