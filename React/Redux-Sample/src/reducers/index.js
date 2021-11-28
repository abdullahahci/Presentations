import counterReducer from './counter';
import loggedReducer from './isLogged';

import {combineReducers} from 'redux';

// Combine reducers to manage from single one

const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer
});

export default allReducers;