
import apiAction from "api/actions";
import { ApiAction, ApiCredentials } from "api/types";
import apiClient from "api/api";
import { loginFailed, loginSuccess, logoutFailed, logoutSuccess, refreshTokenFailed, refreshTokenSuccess } from './actions';
import AuthActions from "./enum";

export const loginRequest = (credentials: ApiCredentials): ApiAction => apiAction({
    apiEndpoint: apiClient.auth.login,
    data: credentials,
    onSuccess: loginSuccess,
    onFailure: loginFailed,
    label: AuthActions.AUTH_LOGIN_REQUEST
})

export const logoutRequest = (): ApiAction => apiAction({
    apiEndpoint: apiClient.auth.logout,
    data: null,
    onSuccess: logoutSuccess,
    onFailure: logoutFailed,
    label: AuthActions.AUTH_LOGOUT_REQUEST
})

export const refreshTokenRequest = (): ApiAction => apiAction({
    apiEndpoint: apiClient.auth.refreshToken,
    data: null,
    onSuccess: refreshTokenSuccess,
    onFailure: refreshTokenFailed,
    label: AuthActions.AUTH_LOGOUT_REQUEST
})

