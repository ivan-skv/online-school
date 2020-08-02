import { schoolInfoTypes } from './schoolInfo.types'
import { ISchoolInfoState, IAction } from '../interfaces'

export const initialSchoolInfoState: ISchoolInfoState = {
  isFetching: false,
  error: null,
  name: 'Лицей №4',
  address: undefined,
  logo: undefined,
}

export const schoolInfoReducer = (state = initialSchoolInfoState, action: IAction): ISchoolInfoState => {
  switch (action.type) {
    case schoolInfoTypes.GET_SCHOOL_INFO:
      return {
        ...state,
        isFetching: true,
        error: null,
      }
    case schoolInfoTypes.SET_SCHOOL_INFO:
      return {
        ...state,
        ...action.payload,
        isFetching: false,
        error: null,
      }
    case schoolInfoTypes.SET_SCHOOL_INFO_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      }
    default:
      return state;
  }
}