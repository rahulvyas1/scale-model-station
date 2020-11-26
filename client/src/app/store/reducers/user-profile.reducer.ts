import { UserAction, UserActionTypes } from '../actions/user.action';
import { UserProfile } from '../models/user-profile.model';



export interface UserState {
  userProfile: UserProfile,
  loading: boolean,
  error: Error,
  signedIn: boolean
}

const initialState: UserState = {
  userProfile: {},
  loading: false,
  error: undefined,
  signedIn: false
}

export function UserReducer(state: UserState = initialState, action: UserAction) {
  switch (action.type) {
    case UserActionTypes.LOAD_USER:
      return {
        ...state,
        userProfile:action.payload,
        loading: true
      }
    case UserActionTypes.LOAD_USER_SUCCESS:
      return {
        ...state,
        userProfile: action.payload,
        loading: false
      }

    case UserActionTypes.LOAD_USER_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      }
    default:
      return state;
  }
}