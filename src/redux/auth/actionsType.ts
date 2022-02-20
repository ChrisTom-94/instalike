import { ApiCredentialsErrors } from 'api/types';
import { Action } from "redux";
import AuthActions from "./enum";

export interface LoginAction extends Action<typeof AuthActions.AUTH_LOGIN> {
    payload: undefined;
}
export interface LoginSuccessAction extends Action<typeof AuthActions.AUTH_LOGIN_SUCCESS> {
    payload: undefined;
}

export interface LoginFailureAction extends Action<typeof AuthActions.AUTH_LOGIN_FAILURE> {
    errors: ApiCredentialsErrors;
}

export interface LogoutAction extends Action<typeof AuthActions.AUTH_LOGOUT> {
    payload: undefined;
}