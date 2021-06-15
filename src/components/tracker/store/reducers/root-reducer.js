
        export default function reducer(state, action) {
            switch (action.type) {
                case 'ADD_TRACKER':
                    return [...state, action.payload];

                case 'REMOVE_TRACKER':
                    return state.filter(item=>item.id!==action.payload.id);

                case 'START_TRACKER':
                    return state.map(item=>{
                        if(item.id === action.payload.id) {
                            return {...item,
                                active: true
                            }
                        }
                        return item;
                    });

                case 'STOP_TRACKER':
                    return state.map(item=>{
                        if(item.id === action.payload.id) {
                            return {...item,
                                active: false
                            }
                        }
                        return item;
                    });

                case 'UPDATE_SECOND':
                    return state.map(item=>{
                        if(item.id === action.payload.id) {
                            return {...item,
                                seconds: item.seconds + (action.payload.currentSecond - action.payload.startingTime),
                                startingTime: action.payload.startingTime
                            }
                        }
                        return item;
                    });

                case 'UPDATE_MINUTE':
                    return state.map(item=>{
                        if(item.id === action.payload.id) {
                            return {...item,
                                seconds: 0,
                                minutes: item.minutes + 1,
                            }
                        }
                        return item;
                    });

                case 'UPDATE_HOUR':
                    return state.map(item=>{
                        if(item.id === action.payload.id) {
                            return {...item,
                                minutes: 0,
                                hours: item.hours + 1,
                            }
                        }
                        return item;
                    });
        default:
            return state
    }
}