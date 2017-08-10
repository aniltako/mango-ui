import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger as logger } from 'redux-logger';
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import userReducer from './reducers/userReducer.js';

export default createStore(
    combineReducers({
    	userReducer
    }), 
    {}, 
    applyMiddleware(logger(), thunk, promise())
);