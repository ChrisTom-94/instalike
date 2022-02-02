import { LoginFailureAction, LoginSuccessAction, LogoutAction, RefreshTokenAction } from "./actionsType"
import AuthActions from "./enum"

export const login = (): LoginSuccessAction => ({
    type: AuthActions.AUTH_LOGIN_SUCCESS,
    payload: undefined
})

export const loginFailed = (error: string): LoginFailureAction => ({
    type: AuthActions.AUTH_LOGIN_FAILURE,
    error
})

export const logout = (): LogoutAction => ({
    type: AuthActions.AUTH_LOGOUT,
    payload: undefined
})

export const refreshToken = (): RefreshTokenAction => ({
    type: AuthActions.AUTH_REFRESH_TOKEN,
    payload: undefined
})