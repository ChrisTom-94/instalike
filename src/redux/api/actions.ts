import { LoginAction, LogoutAction, RequestEndAction, RequestErrorAction, RequestStartAction } from "./actionsType"
import {ApiActions} from "./enum"
import { ApiAction, ApiActionPayload } from "./types"

export const apiStart = (): RequestStartAction => ({
    type: ApiActions.REQUEST_START,
    payload: undefined
})

export const apiEnd = (): RequestEndAction => ({
    type: ApiActions.REQUEST_END,
    payload: undefined
})

export const apiError = (): RequestErrorAction => ({
    type: ApiActions.REQUEST_ERROR,
    payload: undefined
})

export const login = (): LoginAction => ({
    type: ApiActions.LOGIN,
    payload: undefined
})

export const logout = (): LogoutAction => ({
    type: ApiActions.LOGOUT,
    payload: undefined
})

const apiAction = ({
    apiEndpoint,
    data = null,
    label
}: ApiActionPayload): ApiAction => ({
    type: ApiActions.API,
    payload: {
      apiEndpoint, 
      data, 
      label
    }
})

export default apiAction


