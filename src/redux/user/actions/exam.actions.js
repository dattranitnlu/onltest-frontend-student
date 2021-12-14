// Create Redux action types
export const FETCH_EXAM_REQUEST = 'FETCH_EXAM_REQUEST';
export const FETCH_EXAM_SUCCEEDED = 'FETCH_EXAM_SUCCEEDED';
export const FETCH_EXAM_FAILED = 'FETCH_EXAM_FAILED';
export const FETCH_EXAM_REFRESH = 'FETCH_EXAM_REFRESH';

export const FETCH_EXAM_REQUEST_IN_SELECT_FORM = 'FETCH_EXAM_REQUEST_IN_SELECT_FORM';
export const FETCH_EXAM_SUCCEEDED_IN_SELECT_FORM = 'FETCH_EXAM_SUCCEEDED_IN_SELECT_FORM';

// Create Redux action creators that return an action
export const fetchRequest = (data) => {
    console.log('Fetch exams list = ', data);
    return {
        type: FETCH_EXAM_REQUEST,
        payload: data
    }
}

export const fetchRequestForSelect = (data) => ({
    type: FETCH_EXAM_REQUEST_IN_SELECT_FORM,
    payload: data
})
