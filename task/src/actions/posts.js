import { createAction } from 'redux-actions';

export const loadStarted = createAction('[Post] Load started');
export const loadCompleted = createAction('[Post] Load completed');
export const loadFailed = createAction('[Post] Load failed');

export const loadPost = (dispatch, pageNumber) => {
    dispatch(loadStarted());
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=3&_page=${pageNumber}`)
        .then((response) => response.json())
        .then((posts) => {
            dispatch(loadCompleted(posts));
        })
        .catch((error) => {
            dispatch(loadFailed(error));
        });
};