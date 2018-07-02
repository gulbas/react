import {createStore, applyMiddleware} from 'redux';

import thunk from 'redux-thunk';

const logger = (store) => (next) => (action) => {
    console.log('action', action);
    const result = next(action);
    console.log('next state', store.getState());

    return result;
};

import reducer from 'reducers';

export default createStore(
    reducer,
    applyMiddleware(logger, thunk)
);
