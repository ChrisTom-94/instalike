import type {
  LoginAction,
  LogoutAction,
  RequestEndAction,
  RequestErrorAction,
  RequestStartAction,
} from "./actionsType";
import type { ApiErrors } from "./types";
import { ApiActions, LoadingStatus } from "./enum";

export const apiStart = (loading: LoadingStatus): RequestStartAction => ({
  type: ApiActions.REQUEST_START,
  payload: loading,
});

export const apiEnd = (): RequestEndAction => ({
  type: ApiActions.REQUEST_END,
  payload: undefined,
});

export const apiError = (errors: ApiErrors): RequestErrorAction => ({
  type: ApiActions.REQUEST_ERROR,
  payload: errors,
});

export const login = (): LoginAction => ({
  type: ApiActions.LOGIN,
  payload: undefined,
});

export const logout = (): LogoutAction => ({
  type: ApiActions.LOGOUT,
  payload: undefined,
});
