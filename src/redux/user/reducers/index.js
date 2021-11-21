import {combineReducers} from 'redux';

import authReducer from './auth.reducer';
import examReducer from "./exam.reducer";

const rootReducer = combineReducers({
    auth: authReducer,
    exam: examReducer,
})

export default rootReducer;
