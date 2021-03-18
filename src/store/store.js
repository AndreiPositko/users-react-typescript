import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import logger from 'redux-logger';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const enhacer = applyMiddleware(sagaMiddleware, logger);

const store = createStore(rootReducer, enhacer);

sagaMiddleware.run(rootSaga);

export default store;
