
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga'
import createRootReducer from './createRootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = createRootReducer();

export type AppState = ReturnType<typeof rootReducer>;

export default (initialState = {}) => {

  const middleware: any = [
    sagaMiddleware,
  ];

  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(...middleware)
    )
  );

  sagaMiddleware.run(rootSaga);

  return store;
}
