import { AnyAction } from 'redux';
import { apiAction } from "api/actions";
import { ApiAction, ApiCredentials } from "api/types";
import apiClient from "api/api";
import AuthActions from './enum';

export const loginSuccess = (): AnyAction => ({
    type: AuthActions.AUTH_LOGIN_SUCCESS,
    payload: undefined
})

export const loginFailed = (error: string): AnyAction => ({
    type: AuthActions.AUTH_LOGIN_FAILURE,
    error
})

export const tryLogin = (credentials: ApiCredentials): ApiAction => apiAction({
    apiEndpoint: apiClient.auth.login,
    data: credentials,
    onSuccessAction: loginSuccess,
    onFailureAction: loginFailed, 
    label: AuthActions.AUTH_LOGIN_SUCCESS
})

export const logoutSuccess = (): AnyAction => ({
    type: AuthActions.AUTH_LOGOUT,
    payload: undefined
})

export const logout = (credentials: ApiCredentials): ApiAction => apiAction({
    apiEndpoint: apiClient.auth.logout,
    data: credentials,
    onSuccessAction: logoutSuccess,
    onFailureAction: null, 
    label: AuthActions.AUTH_LOGIN_SUCCESS
})

