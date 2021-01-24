import { Action } from '@ngrx/store';
import { IUser } from '../../modules/shared/interfaces/user.interface';


export enum AuthActionTypes {
  SAVE_USER = '[Auth] Save'
}


export class SaveUser implements Action {
  readonly type = AuthActionTypes.SAVE_USER;
  constructor(public payload: IUser) {}
}

export type AuthActions = SaveUser;
