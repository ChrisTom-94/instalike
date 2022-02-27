
import apiAction from "api/actions";
import { ApiAction, ApiCredentials } from "api/types";
import apiClient from "api/api";
import { loginError, loginSuccess, logoutError, logoutSuccess, refreshTokenError, refreshTokenSuccess } from './actions';
import AuthActions from "./enum";

export const loginRequest = (credentials: ApiCredentials): ApiAction => apiAction({
    apiEndpoint: apiClient.auth.login,
    data: credentials,
    onSuccess: loginSuccess,
    onFailure: loginError,
    label: AuthActions.AUTH_LOGIN_REQUEST
})

export const logoutRequest = (): ApiAction => apiAction({
    apiEndpoint: apiClient.auth.logout,
    data: null,
    onSuccess: logoutSuccess,
    onFailure: logoutError,
    label: AuthActions.AUTH_LOGOUT_REQUEST
})

export const refreshTokenRequest = (): ApiAction => apiAction({
    apiEndpoint: apiClient.auth.refreshToken,
    data: null,
    onSuccess: refreshTokenSuccess,
    onFailure: refreshTokenError,
    label: AuthActions.AUTH_LOGOUT_REQUEST
})

