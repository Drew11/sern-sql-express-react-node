import { createStore } from 'redux';
import reducer from './reducers/root-reducer';
import {loadState, saveState} from '../localStorage';

const persistedState = loadState();

const  getStateFromLocalStorage = () => {
    if(persistedState) {
        return persistedState
    }
    return [];
};

const store = createStore(
    reducer,
    getStateFromLocalStorage()
);

store.subscribe(()=>{
   saveState(store.getState())
});

export default store;
