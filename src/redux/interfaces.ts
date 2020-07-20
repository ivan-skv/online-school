export interface IAction {
  type: string;
  payload?: any;
  error?: any;
}

interface IUserLoginData {
  login?: string;
  email?: string;
}

export interface IStudentState extends IUserLoginData { }

export interface IParentState extends IUserLoginData { }

export interface IEmployeeState extends IUserLoginData { }

export interface IUserState {
  role: '' | 'guest' | 'student' | 'parent' | 'employee';
  student: IStudentState;
  parent: IParentState;
  employee: IEmployeeState;
}

export interface IStore {
  user: IUserState;
}