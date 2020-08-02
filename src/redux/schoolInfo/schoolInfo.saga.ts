import { Store } from 'redux'
import { IStore, IAction } from '../interfaces'

export function* watchSchoolInfo(store: Store<IStore, IAction>) {
  store.getState();
}