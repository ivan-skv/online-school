import { userTypes } from './user.types';
import { IAction, IUserParentState, IUserEmployeeState, IUserStudentState, IUserLoginData } from '../interfaces';

export const setUserGuest = (): IAction => ({ type: userTypes.SET_USER_GUEST });
export const setUserParent = (parent: IUserParentState): IAction => ({ type: userTypes.SET_USER_PARENT, payload: parent });
export const setUserEmployee = (employee: IUserEmployeeState): IAction => ({ type: userTypes.SET_USER_EMPLOYEE, payload: employee });
export const setUserStudent = (student: IUserStudentState): IAction => ({ type: userTypes.SET_USER_STUDENT, payload: student });

export const logoutUser = (): IAction => ({ type: userTypes.LOGOUT_USER });
export const loginUser = (data: IUserLoginData): IAction => ({ type: userTypes.LOGIN_USER, payload: data });
export const sendRecoveryEmail = (email: string): IAction => ({ type: userTypes.SEND_RECOVERY_EMAIL, payload: email });
