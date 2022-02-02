import { Reducer } from 'redux';
import { LoginFailureAction, LoginSuccessAction, LogoutAction, LogoutSuccessAction, RefreshTokenAction } from './actionsType';
import AuthActions from './enum';
import { AuthState } from "./types";


export const authInitialState: AuthState = {
    isAuth: false,
    authenticatedAt: null,
    error: null
};

export type AuthAction =
  | LoginSuccessAction
  | LoginFailureAction
  | LogoutAction
  | LogoutSuccessAction
  | RefreshTokenAction

const authReducer: Reducer<AuthState, AuthAction> = (
    state = authInitialState,
    action
  ) => { 
      switch(action.type){
            case AuthActions.AUTH_LOGIN_SUCCESS:
                return {...state, isAuth: true}

            case AuthActions.AUTH_LOGIN_FAILURE:
                return {...state, isAuth: true, error: action.error}
            
            case AuthActions.AUTH_LOGOUT_SUCCESS:
                return {...state, isAuth: false}

            case AuthActions.AUTH_REFRESH_TOKEN: 
                return {...state, authenticatedAt: new Date().toDateString()}

            default:
                return state
      }
  }

  export default authReducer