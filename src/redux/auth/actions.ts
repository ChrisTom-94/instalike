import { ApiCredentialsErrors } from 'api/types';
import { LoginErrorAction, LoginSuccessAction, LogoutSuccessAction, LogoutErrorAction, RefreshTokenSuccessAction, RefreshTokenErrorAction } from "./actionsType"
import AuthActions from "./enum"

export const loginSuccess = (): LoginSuccessAction => ({
    type: AuthActions.AUTH_LOGIN_SUCCESS,
    payload: undefined
})

export const loginError = (errors: ApiCredentialsErrors): LoginErrorAction => ({
    type: AuthActions.AUTH_LOGIN_ERROR,
    errors
})

export const logoutSuccess = (message: string): LogoutSuccessAction => ({
    type: AuthActions.AUTH_LOGOUT_SUCCESS,
    message
})

export const logoutError = (errors: ApiCredentialsErrors): LogoutErrorAction=> ({
    type: AuthActions.AUTH_LOGOUT_ERROR,
    errors
})

export const refreshTokenSuccess = (token: Instalike.AuthJWT): RefreshTokenSuccessAction =>({
    type: AuthActions.AUTH_REFRESH_TOKEN_SUCCESS,
    payload: token
})

export const refreshTokenError = (message: string): RefreshTokenErrorAction => ({
    type: AuthActions.AUTH_REFRESH_TOKEN_ERROR,
    message
})

