import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import logger from 'redux-logger';

import mySaga from './middleware/saga';
import rootReducer from './reducer';

const sagaMiddleware = createSagaMiddleware();

const enhacer = applyMiddleware(sagaMiddleware, logger);

const store = createStore(rootReducer, enhacer);

sagaMiddleware.run(mySaga);

export default store;
