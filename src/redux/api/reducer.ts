import { Reducer } from "redux";
import {
  RequestStartAction,
  RequestEndAction,
  LoginAction,
  LogoutAction,
} from "./actionsType";
import {ApiActions} from "./enum";
import { ApiState } from "./types";

export const ApiInitialState: ApiState = {
  isAuth: false,
  isLoading: false,
};

export type ApiAction = RequestStartAction | RequestEndAction | LoginAction | LogoutAction

const apiReducer: Reducer<ApiState, ApiAction> = (
  state = ApiInitialState,
  action
) => {
  switch (action.type) {

    case ApiActions.REQUEST_START:
      return { ...state, isLoading: true }

    case ApiActions.REQUEST_END:
      return { ...state, isLoading: false };
    
    case ApiActions.LOGIN:
      return { ...state, isAuth: true };

    case ApiActions.LOGOUT:
      return { ...state, isAuth: false, isLoading: false };

    default:
      return state;
  }
};

export default apiReducer;
