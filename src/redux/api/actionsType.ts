import type { Action } from "redux";
import type { ApiErrors } from "./types";
import { ApiActions, LoadingStatus } from "./enum";

export interface RequestStartAction
  extends Action<typeof ApiActions.REQUEST_START> {
  payload: LoadingStatus;
}
export interface RequestEndAction
  extends Action<typeof ApiActions.REQUEST_END> {
  payload: undefined;
}
export interface RequestErrorAction
  extends Action<typeof ApiActions.REQUEST_ERROR> {
  payload: ApiErrors;
}
export interface LoginAction extends Action<typeof ApiActions.LOGIN> {
  payload: undefined;
}

export interface LogoutAction extends Action<typeof ApiActions.LOGOUT> {
  payload: undefined;
}
