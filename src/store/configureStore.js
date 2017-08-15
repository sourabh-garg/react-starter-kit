import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/rootReducers';
import Thunk from 'redux-thunk';

export default function configureStore(initialState) {
  return createStore(
    rootReducer, initialState, applyMiddleware(Thunk)
  );

}
