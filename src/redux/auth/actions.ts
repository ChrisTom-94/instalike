import { deleteToken, saveToken } from 'utils/helpers';
import { ApiCredentialsErrors } from 'api/types';
import { LoginFailureAction, LoginSuccessAction, LogoutSuccessAction, LogoutFailureAction } from "./actionsType"
import AuthActions from "./enum"

export const loginSuccess = (token: Instalike.AuthJWT): LoginSuccessAction => {
    saveToken(token)
    return {
    type: AuthActions.AUTH_LOGIN_SUCCESS,
    payload: undefined
}}

export const loginFailed = (errors: ApiCredentialsErrors): LoginFailureAction => ({
    type: AuthActions.AUTH_LOGIN_FAILURE,
    errors
})

export const logoutSuccess = (message: string): LogoutSuccessAction => {
    deleteToken()
    return {
        type: AuthActions.AUTH_LOGOUT_SUCCESS,
        message
}}

export const logoutFailed = (errors: ApiCredentialsErrors): LogoutFailureAction=> ({
    type: AuthActions.AUTH_LOGOUT_FAILURE,
    errors
})

export const refreshTokenSuccess = (message: string): LogoutSuccessAction => ({
    type: AuthActions.AUTH_LOGOUT_SUCCESS,
    message
})

export const refreshTokenFailed = (errors: ApiCredentialsErrors): LogoutFailureAction=> ({
    type: AuthActions.AUTH_LOGOUT_FAILURE,
    errors
})

