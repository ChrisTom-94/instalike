import { Reducer } from "redux";
import {
  LoginFailureAction,
  LoginSuccessAction,
  LogoutFailureAction,
  LogoutSuccessAction,
  LoginRequestAction,
  LogoutRequestAction,
  RefreshTokenRequestAction,
  RefreshTokenFailureAction,
  RefreshTokenSuccessAction,
} from "./actionsType";
import AuthActions from "./enum";
import { AuthState } from "./types";

export const authInitialState: AuthState = {
  isAuth: false,
  errors: null,
  isLoading: false,
};

export type AuthAction =
  | LoginRequestAction
  | LoginSuccessAction
  | LoginFailureAction
  | LogoutRequestAction
  | LogoutSuccessAction
  | LogoutFailureAction
  | RefreshTokenRequestAction
  | RefreshTokenSuccessAction
  | RefreshTokenFailureAction;

const authReducer: Reducer<AuthState, AuthAction> = (
  state = authInitialState,
  action
) => {
  switch (action.type) {
    case AuthActions.AUTH_LOGIN_REQUEST:
      return { isAuth: false, errors: null, isLoading: true };

    case AuthActions.AUTH_LOGIN_SUCCESS:
      return { isAuth: true, errors: null, isLoading: false };

    case AuthActions.AUTH_LOGIN_FAILURE:
      return { isAuth: false, errors: action.errors, isLoading: false };

    case AuthActions.AUTH_LOGOUT_REQUEST:
      return { ...state, errors: null, isLoading: true };

    case AuthActions.AUTH_LOGOUT_SUCCESS:
      return authInitialState;

    case AuthActions.AUTH_LOGOUT_FAILURE:
      return { ...state, errors: action.errors, isLoading: false };

    default:
      return state;
  }
};

export default authReducer;
