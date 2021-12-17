import * as actions from '../actions/auth.actions';

export const initialState = {
    loading: false,
    error: false,
    token: null,
    userInfo: {}
}

export default function authReducer(state = initialState, {type, payload}) {
    switch (type) {
        case actions.LOGIN_REQUEST:
            return {
                ...state,
                loading: true
            };
        case actions.LOGIN_SUCCEEDED:
            return {
                ...state,
                loading: false,
                token: payload.token,
                user: payload.userInfo
            };
        case actions.LOGIN_FAILED:
            return {
                ...state,
                loading: false,
                error: payload.error
            };
        case actions.LOGIN_REFRESH:
            return {
                ...state,
                loading: false,
            };
        case actions.LOGOUT_REQUEST:
            return {
                ...state,
                loading: true
            };
        case actions.LOGOUT_SUCCEEDED:
            return {
                ...state,
                loading: false,
                error: false,
                token: null,
                userInfo: {}
            };
        case actions.LOGOUT_FAILED:
            return {
                ...state,
                loading: false
            };
        case actions.CHECK_AUTHENTICATED_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case actions.CHECK_AUTHENTICATED_SUCCEEDED:
            const { token, userInfo } = payload;
            return {
                ...state,
                loading: false,
                token: token,
                userInfo: userInfo,
            };
        case actions.CHECK_AUTHENTICATED_FAILED:
            return {
                ...state,
                loading: false,
                error: payload.error
            };
        case actions.CHECK_AUTHENTICATED_REFRESH:
            return {
                ...state,
                error: false,
            };
        default:
            return state;
    }
}
