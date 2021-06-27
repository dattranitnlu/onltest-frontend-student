import * as actions from '../actions/auth.actions';

export const initialState = {
    token: '',
    username: '',
    hasErrors: false
}

export default function authReducer(state = initialState, {type}) {
    switch (type) {
        case actions.LOGIN:
            return {...state, username: 'Martin Hawkins'};
        case actions.LOGOUT:
            return state;
        default:
            return state;
    }
}