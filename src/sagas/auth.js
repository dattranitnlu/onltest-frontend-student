import {createBrowserHistory} from 'history';
import {call, all, put, takeLatest} from 'redux-saga/effects';
import {login} from "../services/student/AuthenticatedService";
import * as actions from "../redux/user/actions/auth.actions";
import {
    getToken,
    loadState,
    removeToken,
    removeUserInfo,
    setState,
    setToken
} from "../utils/helpers/authUtils";

const history = createBrowserHistory();

function* signIn({payload}) {
    try {
        const results = yield call(login, payload);
        const {token, userInfo} = results?.data;

        yield all([
            yield call(setToken, token),
            yield call(setState, userInfo)
        ]);

        yield put({
            type: actions.LOGIN_SUCCEEDED,
            payload: {
                token,
                userInfo
            }
        });
    } catch (error) {
        yield put({
            type: actions.LOGIN_FAILED,
            payload: error
        });
    } finally {
        yield put({
            type: actions.LOGIN_REFRESH
        });
    }
}

function* checkAuthentication() {
    try {
        const [token, userInfo] = yield all([getToken(), loadState('user_info')]);
        if (token) {
            yield put({
                type: actions.CHECK_AUTHENTICATED_SUCCEEDED,
                payload: {
                    token,
                    userInfo
                },
            });
        } else {
            yield put({type: actions.LOGOUT_SUCCEEDED});
        }
    } catch (error) {
        yield put({type: actions.LOGOUT_SUCCEEDED});
    } finally {
        yield put({type: actions.CHECK_AUTHENTICATED_REFRESH});
    }
}

function* logout() {
    yield call(removeToken);
    yield call(removeUserInfo);
    yield put({
        type: actions.LOGOUT_SUCCEEDED
    });
    yield call(history.push, '/');
}

export default function* authSaga() {
    yield takeLatest(actions.LOGIN_REQUEST, signIn);
    yield takeLatest(actions.LOGOUT_REQUEST, logout);
    yield takeLatest(actions.CHECK_AUTHENTICATED_REQUEST, checkAuthentication);
}
