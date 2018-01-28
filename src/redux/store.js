import { combineReducers, compose, createStore } from 'redux';
import count from './count';

const rootReducer = combineReducers({
  count,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(rootReducer, composeEnhancers());
