import {call, put, takeLatest} from 'redux-saga/effects';
import * as actions from '../redux/user/actions/content.actions';

import {listContentTestByTestId} from '../services/student/ExamService';

function* fetchContentExam({payload}) {
    try {
        const results = yield call(listContentTestByTestId, payload);
        const { code, data, pageInfo } = results?.data;

        yield put({
            type: actions.FETCH_CONTENT_EXAM_SUCCEEDED,
            payload: {
                code,
                data,
                pageInfo
            }
        });
    } catch (error) {
        yield put({
            type: actions.FETCH_CONTENT_EXAM_FAILED,
            payload: error
        });
    } finally {
        yield put({
            type: actions.FETCH_CONTENT_EXAM_REFRESH
        });
    }
}

export default function* contentSaga() {
    yield takeLatest(actions.FETCH_CONTENT_EXAM_REQUEST, fetchContentExam);
}