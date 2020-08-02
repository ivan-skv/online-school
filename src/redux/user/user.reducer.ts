import { userTypes } from './user.types';
import { IAction, IUserState } from '../interfaces';

export const initialUserState: IUserState = {
  role: '',
  isFetching: false,
  error: null,
  employee: {},
  student: {},
  parent: {},
};

export const userReducer = (state: IUserState = initialUserState, action: IAction): IUserState => {
  switch (action.type) {
    case userTypes.SET_USER_GUEST:
      return {
        ...state,
        employee: {},
        student: {},
        parent: {},
        role: 'guest',
        isFetching: false,
        error: null,
      };
    case userTypes.SET_USER_STUDENT:
      return {
        ...state,
        role: 'student',
        student: {
          ...action.payload,
        },
        employee: {},
        parent: {},
        isFetching: false,
        error: null,
      }
    case userTypes.SET_USER_PARENT:
      return {
        ...state,
        role: 'parent',
        parent: {
          ...action.payload,
        },
        employee: {},
        student: {},
        isFetching: false,
        error: null,
      }
    case userTypes.SET_USER_EMPLOYEE:
      return {
        ...state,
        role: 'employee',
        employee: {
          ...action.payload,
        },
        student: {},
        parent: {},
        isFetching: false,
        error: null,
      }
    case userTypes.LOGIN_USER:
      return {
        ...state,
        isFetching: true,
        error: null,
      }
    case userTypes.LOGIN_USER_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      }
    case userTypes.LOGOUT_USER: {
      return {
        ...initialUserState,
      }
    }
    default:
      return state;
  }
};
