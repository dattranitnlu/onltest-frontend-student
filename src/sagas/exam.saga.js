import {call, put, takeLatest} from 'redux-saga/effects';
import * as actions from '../redux/user/actions/exam.actions';

import {listExamsOfStudent} from '../services/student/ExamService';

function* fetchExams({payload}) {
    try {
        const results = yield call(listExamsOfStudent, payload);
        const { code, data, pageInfo } = results?.data;

        yield put({
            type: actions.FETCH_EXAM_SUCCEEDED,
            payload: {
                code,
                data,
                pageInfo
            }
        });
    } catch (error) {
        yield put({
            type: actions.FETCH_EXAM_FAILED,
            payload: error
        });
    } finally {
        yield put({
            type: actions.FETCH_EXAM_REFRESH
        });
    }
}

export default function* examSaga() {
    yield takeLatest(actions.FETCH_EXAM_REQUEST, fetchExams);
}
