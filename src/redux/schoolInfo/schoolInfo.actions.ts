import { schoolInfoTypes } from './schoolInfo.types'
import { IAction } from '../interfaces'

export const getSchoolInfo = (): IAction => ({ type: schoolInfoTypes.GET_SCHOOL_INFO });
export const setSchoolInfo = (schoolInfo: any): IAction => ({ type: schoolInfoTypes.SET_SCHOOL_INFO, payload: schoolInfo });
export const setSchoolInfoError = (error: any): IAction => ({ type: schoolInfoTypes.SET_SCHOOL_INFO_ERROR, error });