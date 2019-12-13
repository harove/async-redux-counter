import {createStore,applyMiddleware,combineReducers} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import addModuleReducer from './modules/add/reducer';

const rootReducer = combineReducers({
    addModuleReducer: addModuleReducer,
});

const store = createStore(rootReducer,applyMiddleware(thunk,logger));

export default store;