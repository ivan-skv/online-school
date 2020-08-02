export interface IAction {
  type: string;
  payload?: any;
  error?: any;
}

export interface IUserData {
  login?: string;
  email?: string;
}

export interface IUserLoginData {
  login: string;
  password: string;
}

export interface IUserStudentState extends IUserData { }

export interface IUserParentState extends IUserData { }

export interface IUserEmployeeState extends IUserData { }

export type IUserRole = 'guest' | 'student' | 'parent' | 'employee';

export interface IUserState {
  role: '' | IUserRole;
  student: IUserStudentState;
  parent: IUserParentState;
  employee: IUserEmployeeState;
  isFetching: boolean;
  error: any;
}

export interface ISchoolInfoState {
  name?: string;
  logo?: string;
  address?: string;
  isFetching: boolean;
  error: any;
}

export interface IStore {
  user: IUserState;
  schoolInfo: ISchoolInfoState,
}