import { combineReducers, createStore } from 'redux';
import count from './count';

const rootReducer = combineReducers({
  count,
});

export default createStore(rootReducer);
