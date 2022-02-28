import { ApiCredentialsErrors } from 'api/types';
import { Action } from "redux";
import AuthActions from "./enum";

export interface LoginRequestAction extends Action<typeof AuthActions.AUTH_LOGIN_REQUEST> {
    payload: undefined;
}

export interface LoginSuccessAction extends Action<typeof AuthActions.AUTH_LOGIN_SUCCESS> {
    payload: undefined;
}

export interface LoginErrorAction extends Action<typeof AuthActions.AUTH_LOGIN_ERROR> {
    errors: ApiCredentialsErrors;
}

export interface LogoutRequestAction extends Action<typeof AuthActions.AUTH_LOGOUT_REQUEST> {
    payload: undefined;
}

export interface LogoutSuccessAction extends Action<typeof AuthActions.AUTH_LOGOUT_SUCCESS> {
    message: string;
}

export interface LogoutErrorAction extends Action<typeof AuthActions.AUTH_LOGOUT_ERROR> {
    errors: ApiCredentialsErrors;
}

export interface RefreshTokenRequestAction extends Action<typeof AuthActions.AUTH_REFRESH_TOKEN_REQUEST> {
    payload: undefined;
}

export interface RefreshTokenSuccessAction extends Action<typeof AuthActions.AUTH_REFRESH_TOKEN_SUCCESS> {
    payload: Instalike.AuthJWT
}

export interface RefreshTokenErrorAction extends Action<typeof AuthActions.AUTH_REFRESH_TOKEN_ERROR> {
    message: string;
}