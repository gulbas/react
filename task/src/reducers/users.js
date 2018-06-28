import { handleActions } from 'redux-actions';

import { loadUsers } from 'actions/users';

const initialState = {
    loading: false,
    users: []
};

export default handleActions({
    [loadUsers]: (state) => {
        return {
            ...state,
            users: [
                { id: 1, name: 'Vasya' },
                { id: 2, name: 'Petya' }
            ]
        }
    }
}, initialState)