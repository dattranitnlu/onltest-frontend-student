// Create Redux action types
export const FETCH_EXAM_REQUEST = 'FETCH_EXAM_REQUEST';
export const FETCH_EXAM_SUCCEEDED = 'FETCH_EXAM_SUCCEEDED';
export const FETCH_EXAM_FAILED = 'FETCH_EXAM_FAILED';
export const FETCH_EXAM_REFRESH = 'FETCH_EXAM_REFRESH';

// Create Redux action creators that return an action
export const fetchRequest = (data) => {
    console.log('Fetch exams list = ', data);
    return {
        type: FETCH_EXAM_REQUEST,
        payload: data
    }
}