import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import appReducers from './../reducers/index';
import mySaga from './../sagas/index';
const sagaMiddleware = createSagaMiddleware();
const middlewares = [thunk, sagaMiddleware];
const enhancers = [applyMiddleware(...middlewares)];
const configStore = () => {
  const store = createStore(appReducers, composeWithDevTools(...enhancers));
  sagaMiddleware.run(mySaga);
  return store;
};

export default configStore;
