import React from 'react';
import { setQuery } from '../../actions/filter-actions';

import {useDispatch, useSelector} from 'react-redux';
import './filter.scss'

const Filter = () => {
    const dispatch = useDispatch();
    const queryFilter = useSelector( state=>state.queryFilter);

    const setFilter = ( event ) => {
        dispatch(setQuery(event.target.value))
    };

    return (
        <div className="filter">
            <input
                type="text"
                placeholder="search by name"
                onChange={ setFilter }
                value={ queryFilter }
            />
        </div>
    )
};

export default Filter;