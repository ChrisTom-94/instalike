import { ApiCredentialsErrors } from 'api/types';
import { LoginAction, LoginFailureAction, LoginSuccessAction, LogoutAction } from "./actionsType"
import AuthActions from "./enum"

export const login = (): LoginAction => ({
    type: AuthActions.AUTH_LOGIN,
    payload: undefined
})

export const loginSucces = (): LoginSuccessAction => ({
    type: AuthActions.AUTH_LOGIN_SUCCESS,
    payload: undefined
})

export const loginFailed = (errors: ApiCredentialsErrors): LoginFailureAction => ({
    type: AuthActions.AUTH_LOGIN_FAILURE,
    errors
})

export const logout = (): LogoutAction => ({
    type: AuthActions.AUTH_LOGOUT,
    payload: undefined
})
