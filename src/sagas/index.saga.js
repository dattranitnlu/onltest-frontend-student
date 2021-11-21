import { all, fork } from 'redux-saga/effects';

import authSaga from './auth.saga';
import examSaga from "./exam.saga";

export default function* rootSaga() {
    yield all([
        authSaga(),
        fork(examSaga),
    ]);
}
