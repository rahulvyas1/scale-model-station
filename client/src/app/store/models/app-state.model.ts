import { UserState } from '../reducers/user-profile.reducer';

export interface AppState {
    readonly user: UserState

}