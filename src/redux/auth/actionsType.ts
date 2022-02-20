import { ApiCredentialsErrors } from 'api/types';
import { Action } from "redux";
import AuthActions from "./enum";

export interface LoginSuccessAction extends Action<typeof AuthActions.AUTH_LOGIN_SUCCESS> {
    payload: undefined;
}

export interface LoginFailureAction extends Action<typeof AuthActions.AUTH_LOGIN_FAILURE> {
    errors: ApiCredentialsErrors;
}

export interface LogoutSuccessAction extends Action<typeof AuthActions.AUTH_LOGOUT_SUCCESS> {
    message: string;
}

export interface LogoutFailureAction extends Action<typeof AuthActions.AUTH_LOGOUT_FAILURE> {
    errors: ApiCredentialsErrors;
}