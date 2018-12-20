import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { loadAuthToken } from './local-storage';
import { setAuthToken, refreshAuthToken } from './actions/auth';

import { authReducer } from './reducers/auth';

export const store = createStore(
    combineReducers({
        auth: authReducer
    }),
    applyMiddleware(thunk)
);

const authToken = loadAuthToken();
if (authToken) {
    const token = authToken;
    store.dispatch(setAuthToken(token));
    store.dispatch(refreshAuthToken());
}
