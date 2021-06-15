import {tempApi} from '../api/index';
import {useSelector} from 'react-redux';
import React from "react";

import {
    START_LOADING,
    FINISH_LOADING,
    LOADING_FAILURE,
    LOADING_COMPLETE,
    SET_CURRENT_PAGE,
    SET_BUTTONS_PER_PAGE,
    SET_INDEX_FIRST_PAGE,
    SET_PAGINATION_LENGTH,
    SELECT_USER
} from '../constants/index';

export function setPaginationLength(length) {
    return {
       type: SET_PAGINATION_LENGTH,
       payload: length
    }
}

export function setMore (length) {
    return {
        type: 'SET_MORE',
        payload: length
    }
}

export function setIndexFirstPage(range) {
    return {
        type: SET_INDEX_FIRST_PAGE,
        payload: range
    };
}

export function setButtonsPerPage(range) {
    return {
        type: SET_BUTTONS_PER_PAGE,
        payload: range
    };
}

export function setCurrentPage(page) {
    return {
        type: SET_CURRENT_PAGE,
        payload: page
    };
}

export function startLoading() {
    return {
        type: START_LOADING,
    };
}

export function finishLoading() {
    return {
        type: FINISH_LOADING,
    };
}

export function loadingFailure(error) {
    return {
        type: LOADING_FAILURE,
        payload: error
    };
}

export function usersLoadingComplete(users) {
    return {
        type: LOADING_COMPLETE,
        payload: users
    };
}
export function selectUser(user) {
    return {
        type: SELECT_USER,
        payload: user
    }
}

export const fetchData =  (usersOnPage, currentPage ) => {
    return async dispatch => {
            dispatch(startLoading());
        try {
            const params= {
                users_on_page: usersOnPage,
                current_page: currentPage
            };
            const data = await tempApi.getUsers(params);
            dispatch(usersLoadingComplete(data.users));
            // dispatch(setPaginationLength(data.length));
            // dispatch(finishLoading());
            // dispatch(setMore(data.users.length));

        }catch (err) {
            dispatch(loadingFailure(err.message));
            dispatch(finishLoading());
        }
    };
};

