import { AnyAction } from 'redux';
import { apiAction } from "api/actions";
import { ApiAction, ApiCredentials } from "api/types";
import apiClient from "api/api";
import { saveToken } from "utils/helpers";
import getProfile from 'redux/user/thunks';
import AuthActions from './enum';

export const loginFailed = (error: string): AnyAction => ({
    type: AuthActions.AUTH_LOGIN_FAILURE,
    error
})

export const loginSuccess = (): AnyAction => ({
    type: AuthActions.AUTH_LOGIN_SUCCESS,
    payload: undefined
})

export const login = (credentials: ApiCredentials): ApiAction => apiAction({
    apiEndpoint: apiClient.auth.login,
    data: credentials,
    onSuccess: loginSuccess,
    onFailure: loginFailed, 
    label: AuthActions.AUTH_LOGIN_SUCCESS
})

export const logoutSuccess = (): AnyAction => ({
    type: AuthActions.AUTH_LOGOUT_SUCCESS,
    payload: undefined
})

export const logout = (credentials: ApiCredentials): ApiAction => apiAction({
    apiEndpoint: apiClient.auth.logout,
    data: credentials,
    onSuccess: getProfile,
    onFailure: loginFailed, 
    label: AuthActions.AUTH_LOGIN_SUCCESS
})

export const refreshTokenAsync = (): ApiAction => apiAction({
    apiEndpoint: apiClient.auth.refreshToken,
    data: null,
    onSuccess: saveToken,
    onFailure: () => {}, 
    label: AuthActions.AUTH_REFRESH_TOKEN
});

