import { createAction } from 'redux-actions';

export const loadPostsStarted = createAction('[Post] Load started');
export const loadPostsCompleted = createAction('[Post] Load completed');
export const loadPostsFailed = createAction('[Post] Load failed');

export const loadPost = (dispatch, pageNumber) => {
    dispatch(loadPostsStarted());
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=3&_page=${pageNumber}`)
        .then((response) => response.json())
        .then((posts) => {
            dispatch(loadPostsCompleted(posts));
        })
        .catch((error) => {
            dispatch(loadPostsFailed(error));
        });
};