import { Action } from "redux";
import AuthActions from "./enum";


export interface LoginSuccessAction extends Action<typeof AuthActions.AUTH_LOGIN_SUCCESS> {
    payload: undefined;
}

export interface LoginFailureAction extends Action<typeof AuthActions.AUTH_LOGIN_FAILURE> {
    error: string;
}

export interface LogoutAction extends Action<typeof AuthActions.AUTH_LOGOUT> {
    payload: undefined;
}

export interface LogoutSuccessAction extends Action<typeof AuthActions.AUTH_LOGOUT_SUCCESS> {
    payload: undefined;
}

export interface RefreshTokenAction extends Action<typeof AuthActions.AUTH_REFRESH_TOKEN> {
    payload: undefined
}