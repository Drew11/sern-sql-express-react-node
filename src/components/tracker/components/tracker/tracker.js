import React from 'react';
import {useEffect} from "react";
import { useDispatch} from 'react-redux';
import {
    removeTracker,
    stopTracker,
    startTracker,
    updateSecond,
    updateMinute,
    updateHour
} from '../../store/actions/index';

import moment from 'moment';
import './tracker.css';
import iconPlay from './icons/play_circle_outline-24px.svg';
import iconStop from './icons/stop_circle-24px.svg';

const Tracker = (props) => {
    const { tracker } = props;
    const dispatch = useDispatch();


    useEffect(()=>{
        const startingTime = moment().unix();
        if(tracker.active){
            if (tracker.minutes > 59) {
               dispatch(updateHour(tracker.id))
            }
            if(tracker.seconds > 59){
               dispatch(updateMinute(tracker.id))
            }
            const id = setInterval(() => {
               dispatch(updateSecond(tracker.id, moment().unix(), startingTime ))
            }, 1000);
           return ()=> clearInterval(id);
        }
    }, [tracker.active, tracker.seconds, tracker.minutes]);



    const getTimeString = (param)=>{
        let str = param.toString();
        if(str.length < 2) {
            str = `0${str}`
        }
        return str
    };

    const backgroundStyleTracker = tracker.active? 'play': 'stop';


    const getCallBack = ()=> {
        if(tracker.active) {
           dispatch(stopTracker(tracker.id))
        } else {
           dispatch(startTracker(tracker.id, moment().unix()))
        }
    };

    return (
        <div className={`tracker ${backgroundStyleTracker}`}>
            <div className="tracker-name">
                <span>
                   {tracker.name?tracker.name: 'name'}
                </span>
            </div>

            <div className="tracker-time">
                {`${getTimeString(tracker.hours)}: ${getTimeString(tracker.minutes)}:  ${getTimeString(tracker.seconds)}`}
            </div>


            <div className="tracker-controls-btn">
                <img src={tracker.active?iconStop:iconPlay}
                    className={`tracker-controls-btn`}
                    onClick={getCallBack}
                >
                </img>

                <div
                     className={`remove`}
                     onClick={()=>{dispatch(removeTracker(tracker))}}
                >
                </div>

            </div>
        </div>
    )

};

export default Tracker;