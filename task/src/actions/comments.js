import {createAction} from 'redux-actions';

export const loadStarted = createAction('[Comments] Load started');
export const addComments = createAction('[Comments] Add comment');
export const loadFailed = createAction('[Comments] Load failed');


export const loadComments = () => (dispatch) => {
    dispatch(loadStarted());
    fetch(`http://localhost:3000/comments`)
        .then((response) => response.json())
        .then((res) => {
            dispatch(loadStarted(res));
        })
        .catch((error) => {
            dispatch(loadFailed(error));
        });
};