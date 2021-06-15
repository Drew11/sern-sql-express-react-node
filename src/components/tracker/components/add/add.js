import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import moment from 'moment';
import { addTracker } from  '../../store/actions/index.js'
import './add.css';

function Add() {

    const dispatch = useDispatch();
    const trackers = useSelector(state=>state);

    const add = (event) => {
        const now = moment().toString();
        const name = event.target.value === '' || event.target.value === undefined ? now : event.target.value;

        const newTracker = {
            id: `${now}-${trackers.length}`,
            name,
            seconds: 0,
            minutes: 0,
            hours: 0,
            startingTime: moment().unix(),
            active: true,
            created: moment().unix()
        };


        if( event.code === 'Enter' || event.key === 'Enter' || event.type === 'click'){
            dispatch(addTracker(newTracker));
        }
    };

    return (
        <div className="add-tracker">

            <input type="text"
                   className="add-tracker-input"
                   onKeyDown={add}
                   placeholder="Enter tracker name"
            />

            <div className="add-tracker-btn"
                 onClick={add}
            >
            </div>

        </div>
    );
}

export default Add;
