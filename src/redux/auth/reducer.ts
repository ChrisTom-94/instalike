import { Reducer } from 'redux';
import { LoginFailureAction, LoginSuccessAction, LogoutFailureAction, LogoutSuccessAction } from './actionsType';
import AuthActions from './enum';
import { AuthState } from "./types";


export const authInitialState: AuthState = {
    isAuth: false,
    authenticatedAt: null,
    errors: null,
}

export type AuthAction =
  | LoginSuccessAction
  | LoginFailureAction
  | LogoutSuccessAction
  | LogoutFailureAction

const authReducer: Reducer<AuthState, AuthAction> = (
    state = authInitialState,
    action
  ) => { 
      switch(action.type){
            case AuthActions.AUTH_LOGIN_SUCCESS:
                return {...state, isAuth: true, errors: null}

            case AuthActions.AUTH_LOGIN_FAILURE:
                return {...state, isAuth: false, errors: action.errors}
            
            case AuthActions.AUTH_LOGOUT_SUCCESS:
                return authInitialState

            case AuthActions.AUTH_LOGOUT_FAILURE:
                return {...state, errors: action.errors}

            default:
                return state
      }
  }

  export default authReducer