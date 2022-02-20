import { AnyAction } from 'redux';
import apiAction from "api/actions";
import { ApiAction, ApiCredentials } from "api/types";
import apiClient from "api/api";
import AuthActions from './enum';

export const loginSuccess = (): AnyAction => ({
    type: AuthActions.AUTH_LOGIN_SUCCESS,
    payload: undefined
})

export const loginFailed = (errors: ApiCredentials): AnyAction => ({
    type: AuthActions.AUTH_LOGIN_FAILURE,
    errors
})

export const tryLogin = (credentials: ApiCredentials): ApiAction => apiAction({
    apiEndpoint: apiClient.auth.login,
    data: credentials,
    onSuccess: loginSuccess,
    onFailure: loginFailed, 
    label: AuthActions.AUTH_LOGIN
})

export const logoutSuccess = (): AnyAction => ({
    type: AuthActions.AUTH_LOGOUT,
    payload: undefined
})

export const logout = (credentials: ApiCredentials): ApiAction => apiAction({
    apiEndpoint: apiClient.auth.logout,
    data: credentials,
    onSuccess: logoutSuccess,
    onFailure: null, 
    label: AuthActions.AUTH_LOGIN_SUCCESS
})

