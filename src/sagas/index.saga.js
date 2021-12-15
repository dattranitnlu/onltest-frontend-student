import { all } from 'redux-saga/effects';
import authSaga from './auth.saga';
import examSaga from "./exam.saga";
import contentSaga from "./content.saga";

export default function* rootSaga() {
    yield all([
        authSaga(),
        examSaga(),
        contentSaga()
    ]);
}
