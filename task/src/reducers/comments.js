import {handleActions} from 'redux-actions';

import {loadComments, addComments} from 'actions/comments';

const initialState = {
    loading: false,
    entries: []
};

export default handleActions({
    [loadComments]: (state) => {
        return {
            ...state,
            entries: [
                {
                    id: 1,
                    author: 'Vasya',
                    comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi distinctio doloremque ' +
                    'explicabo mollitia non nostrum possimus quae recusandae sint voluptatibus?'
                },
                {
                    id: 2,
                    author: 'Petr',
                    comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi distinctio doloremque ' +
                    'explicabo mollitia non nostrum possimus quae recusandae sint voluptatibus?'
                }
            ]
        }
    },
    [addComments]: (state, action) => {
        return {
            ...state,
            entries: [...state.entries, action.payload]
        }
    }
}, initialState)
