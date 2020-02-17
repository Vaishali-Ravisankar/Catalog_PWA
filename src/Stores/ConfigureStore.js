import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../Reducers/MasterReducer';
import thunk from 'redux-thunk';
import { offline } from 'redux-offline';
import offlineConfig from 'redux-offline/lib/defaults';

function saveToLocalStorage(state){
    try{
        const serializedState = JSON.stringify(state)
        sessionStorage.setItem('state', serializedState)
    } catch(e){
        
    }
}

function loadFromLocalStorage(){
    try{
        const serializedState = sessionStorage.getItem('state')
        if(serializedState === null) return undefined
        return JSON.parse(serializedState)
    } catch(e) {
        
        return undefined
    }
}

const persistedState = loadFromLocalStorage()

const Store= createStore(
    rootReducer, 
    persistedState,
    compose(
        applyMiddleware(thunk),
        offline(offlineConfig))

    );

Store.subscribe(() => saveToLocalStorage(Store.getState()))

export default Store;