import {Cookies} from "react-cookie";

const cookies = new Cookies();

export function getToken() {
    try {
        return cookies.get('token');
    } catch (err) {
        removeToken();
        return undefined;
    }
}

export function setToken(token) {
    try {
        cookies.set('token', token);
    } catch (err) {
        removeToken();
    }
}

export function removeToken() {
    cookies.remove('token');
}

export function removeUserInfo() {
    cookies.remove('user_info');
}

export function loadState(key) {
    try {
        const serializedState = cookies.get(key);
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
}

export function setState(value) {
    try {
        const serializedState = JSON.stringify(value);
        cookies.set('user_info', serializedState);
    } catch {
        // ignore write errors
    }
}
