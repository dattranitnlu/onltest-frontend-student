import * as actions from '../actions/content.actions';

const initialState = {
    loading: false,
    error: false,
    code: 0,
    data: [],
    pageInfo: {
        currentPage: 0,
        itemsPerPage: 3,
        totalPages: 0
    }
}

export default function contentReducer(state = initialState, { type, payload }) {
    switch (type) {
        case actions.FETCH_CONTENT_EXAM_REQUEST:
            return {
                ...state,
                loading: true
            };
        case actions.FETCH_CONTENT_EXAM_SUCCEEDED:
            return {
                ...state,
                loading: false,
                code: payload.code,
                data: payload.data,
                pageInfo: payload.pageInfo
            };

        case actions.FETCH_CONTENT_EXAM_FAILED:
            return {
                ...state,
                loading: false,
                error: payload.error
            };
        case actions.FETCH_CONTENT_EXAM_REFRESH:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
}