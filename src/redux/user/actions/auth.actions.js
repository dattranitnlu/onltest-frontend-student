// Create Redux action types
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCEEDED = 'LOGIN_SUCCEEDED';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const LOGIN_REFRESH = 'LOGIN_REFRESH';

export const CHECK_AUTHENTICATED_REQUEST = 'CHECK_AUTHENTICATED_REQUEST';
export const CHECK_AUTHENTICATED_SUCCEEDED = 'CHECK_AUTHENTICATED_SUCCEEDED';
export const CHECK_AUTHENTICATED_FAILED = 'CHECK_AUTHENTICATED_FAILED';
export const CHECK_AUTHENTICATED_REFRESH = 'CHECK_AUTHENTICATED_REFRESH';

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCEEDED = 'LOGOUT_SUCCEEDED';
export const LOGOUT_FAILED = 'LOGOUT_FAILED';

// Create Redux action creators that return an action
export const loginRequest = (data) => ({
    type: LOGIN_REQUEST,
    payload: data
})

export const logoutRequest = () => ({
    type: LOGOUT_REQUEST
})

export const checkAuthorization = (data) => ({
    type: CHECK_AUTHENTICATED_REQUEST,
    payload: data
})