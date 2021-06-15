import React, {useState, useEffect} from 'react';

export const loadState = () => {
    try {
        const serializedSate = window.localStorage.getItem('state');
        if(serializedSate === null) {
            return undefined
        }
        return JSON.parse(serializedSate);

    } catch (e) {
        return undefined
    }
};

export const saveState = (state) => {
    try {
        const serializedSate = JSON.stringify(state);
        window.localStorage.setItem('state', serializedSate)

    } catch (e) {
        //
    }
};

