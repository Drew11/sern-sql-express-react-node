export function addTracker (tracker) {
    return {
        type: 'ADD_TRACKER',
        payload: tracker
    }
}

export function removeTracker (tracker) {
    return {
        type: 'REMOVE_TRACKER',
        payload: tracker
    }
}

export function stopTracker ( id ) {
    return {
        type: 'STOP_TRACKER',
        payload: {
            id
        },
    }
}

export function startTracker ( id , startingTime ) {
    return {
        type: 'START_TRACKER',
        payload: {
            id,
            startingTime
        }
    }
}

export function updateSecond (id, currentSecond, startingTime) {
    return {
        type: 'UPDATE_SECOND',
        payload: {
            id,
            currentSecond,
            startingTime
        }
    }
}

export function updateMinute ( id ) {
    return {
        type: 'UPDATE_MINUTE',
        payload: {
            id
        }
    }
}

export function updateHour ( id ) {
    return {
        type: 'UPDATE_HOUR',
        payload: {
            id
        }
    }
}
