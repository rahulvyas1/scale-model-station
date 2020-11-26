import { Action } from '@ngrx/store';
import { UserProfile } from '../models/user-profile.model'

export enum UserActionTypes {
    LOAD_USER = '[USER] Load User',
    LOAD_USER_SUCCESS = '[USER] Load User Success',
    LOAD_USER_FAILURE = '[USER] Load User Failure',
}
export class LoadUserAction implements Action {
    readonly type = UserActionTypes.LOAD_USER
    constructor(public payload: any) {}
  }
  export class LoadUserSuccessAction implements Action {
    readonly type = UserActionTypes.LOAD_USER_SUCCESS

    constructor(public payload: UserProfile) {}

  }
  export class LoadUserFailureAction implements Action {
    readonly type = UserActionTypes.LOAD_USER_FAILURE

    constructor(public payload: Error) {}
  }


  export type UserAction =
    LoadUserAction |
    LoadUserFailureAction |
    LoadUserSuccessAction