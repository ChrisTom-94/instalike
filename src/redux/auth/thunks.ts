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

export const loginRequest = (credentials: ApiCredentials): ApiAction => apiAction({
    apiEndpoint: apiClient.auth.login,
    data: credentials,
    onSuccess: loginSuccess,
    onFailure: loginFailed, 
    label: AuthActions.AUTH_LOGIN_REQUEST
})

export const logoutSuccess = (): AnyAction => ({
    type: AuthActions.AUTH_LOGOUT_SUCCESS,
    payload: undefined
})

export const logoutFailed = (): AnyAction => ({
    type: AuthActions.AUTH_LOGOUT_FAILURE,
    payload: undefined
})

export const logoutRequest = (): ApiAction => apiAction({
    apiEndpoint: apiClient.auth.logout,
    data: null,
    onSuccess: logoutSuccess,
    onFailure: logoutFailed, 
    label: AuthActions.AUTH_LOGOUT_REQUEST
})

// export const logout = (credentials: ApiCredentials): ApiAction => apiAction({
//     apiEndpoint: apiClient.auth.logout,
//     data: credentials,
//     onSuccess: logoutSuccess,
//     onFailure: null, 
//     label: AuthActions.AUTH_LOGIN_SUCCESS
// })

