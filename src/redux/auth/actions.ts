import { ApiCredentialsErrors } from 'api/types';
import { LoginFailureAction, LoginSuccessAction, LogoutSuccessAction, LogoutFailureAction } from "./actionsType"
import AuthActions from "./enum"

export const loginSucces = (): LoginSuccessAction => ({
    type: AuthActions.AUTH_LOGIN_SUCCESS,
    payload: undefined
})

export const loginFailed = (errors: ApiCredentialsErrors): LoginFailureAction => ({
    type: AuthActions.AUTH_LOGIN_FAILURE,
    errors
})

export const logoutSuccess = (message: string): LogoutSuccessAction => ({
    type: AuthActions.AUTH_LOGOUT_SUCCESS,
    message
})

export const logoutFailure = (errors: ApiCredentialsErrors): LogoutFailureAction=> ({
    type: AuthActions.AUTH_LOGOUT_FAILURE,
    errors
})

