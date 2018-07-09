import {handleActions} from 'redux-actions';

import {loadComments, addComments, loadStarted, loadFailed} from 'actions/comments';

const initialState = {
    loading: false,
    entries: []
};

export default handleActions({
    [loadStarted]: (state) => {
        return {
            ...state,
            error: null,
            loading: true,
        };
    },
    [loadFailed]: (state, action) => {
        return {
            ...state,
            loading: false,
            error: action.payload,
        }
    },
    [loadComments] : (state, action) => ({
        ...state,
        loading: false,
        entries: [...state.entries, ...action.payload],
    }),
    [addComments]: (state, action) => {
        return {
            ...state,
            entries: [...state.entries, action.payload]
        }
    }
}, initialState)

