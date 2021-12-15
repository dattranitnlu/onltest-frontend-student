import {combineReducers} from 'redux';

import authReducer from './auth.reducer';
import examReducer from './exam.reducer';
import contentReducer from './content.reducer';

const rootReducer = combineReducers({
    auth: authReducer,
    exam: examReducer,
    content: contentReducer
})

export default rootReducer;
