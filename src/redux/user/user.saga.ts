import { Store } from 'redux'
import { IStore, IAction } from '../interfaces'

export function* watchUser(store: Store<IStore, IAction>) {
  store.getState();
}