import {
  applyMiddleware, combineReducers, createStore, Reducer, Store
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistReducer, persistStore } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import storage from '@react-native-community/async-storage';
import { all } from 'redux-saga/effects'

import {
  IAction,
  IStore,
} from './interfaces';

import * as user from './user'

function* sagaInit(store: Store<IStore, IAction>) {
  yield all([
    user.userSaga.watchUser(store),
  ])
}

const combinedReducer: Reducer = combineReducers({
  user: persistReducer({ key: 'user', storage }, user.userReducer),
});

const sagaMiddleware = createSagaMiddleware();

const store: Store<IStore, IAction> = createStore(
  combinedReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

const persistor = persistStore(store, null, () => {
  store.dispatch({ type: 'persist/BOOTSTRAP', payload: store.getState() })
});

sagaMiddleware.run(sagaInit, store);

export {
  persistor,
  store,
};
