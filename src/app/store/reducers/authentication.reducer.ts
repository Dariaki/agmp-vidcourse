import {AuthActions, AuthActionTypes} from '../actions/authentication.actions';


export const initialState = {
  id: null,
  fakeToken: '',
  name: {
    firstName: '',
    lastName: '',
  },
  login: '',
  password: '',
}

export function authenticationReducer(state = initialState, action: AuthActions) {
  switch (action.type) {
    case AuthActionTypes.SAVE_USER: {
      return {
        ...state,
        ...action.payload
      };
    }
    default: {
      return state;
    }
  }
}



