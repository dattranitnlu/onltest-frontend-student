import * as actions from '../actions/auth.actions';

export const initialState = {
    token: '',
    username: '',
    role: '',
    hasErrors: false
}

export default function authReducer(state = initialState, {type}) {
    switch (type) {
        case actions.LOGIN:
            return {...state, username: 'Martin Hawkins', role: 'Student'};
        case actions.LOGOUT:
            return state;
        default:
            return state;
    }
}