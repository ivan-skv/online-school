import { userTypes } from './user.types';
import { IAction, IParentState, IEmployeeState, IStudentState } from '../interfaces';

export const setUserGuest = (): IAction => ({ type: userTypes.SET_USER_GUEST });
export const setUserParent = (parent: IParentState): IAction => ({ type: userTypes.SET_USER_PARENT, payload: parent });
export const setUserEmployee = (employee: IEmployeeState): IAction => ({ type: userTypes.SET_USER_EMPLOYEE, payload: employee });
export const setUserStudent = (student: IStudentState): IAction => ({ type: userTypes.SET_USER_STUDENT, payload: student });
export const logoutUser = (): IAction => ({ type: userTypes.LOGOUT_USER });
