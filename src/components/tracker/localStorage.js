import moment from 'moment';

export const loadState = () => {
    try {
        const serializedSate = window.localStorage.getItem('state');
        if(serializedSate === null) {
            return undefined
        }

        const state = JSON.parse(serializedSate);


        return state.map(item=>{
            if(item.active){
                const  secondsAfterCloseTab = (moment().unix() - item.startingTime);

                const hoursAfterCloseTab = Math.floor(secondsAfterCloseTab/60/60);
                const minutesAfterCloseTab = Math.floor(secondsAfterCloseTab/60) - (hoursAfterCloseTab * 60);
                const secondsAfterClosenTab = secondsAfterCloseTab - ( (hoursAfterCloseTab * 60 * 60) + ( minutesAfterCloseTab * 60) );

                let hours = hoursAfterCloseTab + item.hours;
                let minutes = minutesAfterCloseTab + item.minutes;
                let seconds = secondsAfterClosenTab + item.seconds;

                console.log(item)

                if( seconds > 59) {
                    minutes += 1;
                    seconds -=60 ;
                }

                if( minutes > 59) {
                    hours +=1;
                    minutes -= 60;
                }

                console.log(
                    {...item,
                        seconds,
                        minutes,
                        hours
                    }
                )

                return {...item,
                    seconds,
                    minutes,
                    hours
                }
            }
            return item;
        });


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
