import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

const store = createStore(
    combineReducers({
        placeholderKey: 'placeholderValue'
    }),
    applyMiddleware(thunk)
);
