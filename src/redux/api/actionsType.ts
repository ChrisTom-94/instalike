import { Action } from "redux";
import {ApiActions} from "./enum";

export interface RequestStartAction extends Action<typeof ApiActions.REQUEST_START> {
    payload: undefined;
}
export interface RequestEndAction extends Action<typeof ApiActions.REQUEST_END> {
    payload: undefined;
}
export interface RequestErrorAction extends Action<typeof ApiActions.REQUEST_ERROR> {
    payload: undefined;
}
export interface LoginAction extends Action<typeof ApiActions.LOGIN> {
    payload: undefined;
}

export interface LogoutAction extends Action<typeof ApiActions.LOGOUT> {
    payload: undefined;
}
