// Create Redux action types
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

// Create Redux action creators that return an action
export const getCredential = () => ({
    type: LOGIN
})

export const logout = () => ({
    type: LOGOUT
})