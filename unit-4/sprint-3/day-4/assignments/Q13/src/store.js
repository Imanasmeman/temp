
import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import { coffeeReducer } from './reducer';

const rootReducer = combineReducers({
  coffee: coffeeReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
