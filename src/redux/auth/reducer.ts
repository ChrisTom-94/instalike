import { checkIfTokenExist } from 'utils/helpers';
import { Reducer } from "redux";
import {
  LoginRequestAction,
  LoginSuccessAction,
  LoginErrorAction,
  LogoutRequestAction,
  LogoutErrorAction,
  LogoutSuccessAction,
  RefreshTokenRequestAction,
  RefreshTokenErrorAction,
  RefreshTokenSuccessAction,
} from "./actionsType";
import AuthActions from "./enum";
import { AuthState } from "./types";

export const authInitialState: AuthState = {
  isAuth: checkIfTokenExist(),
  errors: null,
  isLoading: false,
};

export type AuthAction =
  | LoginRequestAction
  | LoginSuccessAction
  | LoginErrorAction
  | LogoutRequestAction
  | LogoutSuccessAction
  | LogoutErrorAction
  | RefreshTokenRequestAction
  | RefreshTokenSuccessAction
  | RefreshTokenErrorAction;

const authReducer: Reducer<AuthState, AuthAction> = (
  state = authInitialState,
  action
) => {
  switch (action.type) {

    case AuthActions.AUTH_LOGIN_REQUEST:
      return { isAuth: false, errors: null, isLoading: true }

    case AuthActions.AUTH_LOGIN_SUCCESS:
      return { isAuth: true, errors: null, isLoading: false };

    case AuthActions.AUTH_LOGIN_ERROR:
      return { isAuth: false, errors: action.errors, isLoading: false };

    case AuthActions.AUTH_LOGOUT_REQUEST:
      return { ...state, errors: null, isLoading: true };

    case AuthActions.AUTH_LOGOUT_SUCCESS:
      return {...authInitialState, isAuth: false};

    case AuthActions.AUTH_LOGOUT_ERROR:
      return { ...state, errors: action.errors, isLoading: false };

    default:
      return state;
  }
};

export default authReducer;
