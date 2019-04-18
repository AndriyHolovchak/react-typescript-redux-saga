import { combineReducers } from 'redux';
import * as reducers from './_reducers.register';

export const createRootReducer = (asyncReducers?: {}) => combineReducers({
  ...reducers,
  ...asyncReducers,
});

export default createRootReducer;
