import { createStore, applyMiddleware, compose } from 'redux';
// import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';
// import rootSaga from './sagas';

// const sagaMiddleware = createSagaMiddleware();

//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true, traceLimit: 25 }) || compose
const composeEnhancers = compose;
const store = createStore(
  rootReducer,
  
// applyMiddleware(sagaMiddleware)
);
// sagaMiddleware.run(rootSaga);

export default store;