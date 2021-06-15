import { createStore, combineReducers,  applyMiddleware} from 'redux';
import {SELECT_USER} from '../constants/index';
import thunk from "redux-thunk";
import usersReducer from '../reducers/users-reducer';
import loadingReducer from '../reducers/loading-reducer';
import paginationReducer from '../reducers/pagination-reducer';
import errorReducer from '../reducers/error-reducer';
import filterReducer from '../reducers/filter-reducer';
import {loadState, saveState} from '../hooks/locale-storage';

const persistedState = loadState();

const  getStateFromLocalStorage = () => {
    if(persistedState) {
        return persistedState
    }
    return { } ;
};

console.log(getStateFromLocalStorage())

function selectedUser (state = null, action){
    switch (action.type){
        case SELECT_USER:
            return action.payload;
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    users: usersReducer,
    loading: loadingReducer,
    error: errorReducer,
    paginationOptions: paginationReducer,
    selectedUser: selectedUser,
    queryFilter: filterReducer
});

const store = createStore(rootReducer, getStateFromLocalStorage(), applyMiddleware(thunk));
store.subscribe(()=>console.log(store.getState()));
// saveState(store.getState())
export default store;


