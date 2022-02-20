import { AxiosResponse, AxiosError } from 'axios';
import { Middleware } from "redux";
import { saveToken, deleteToken, shouldIntercept, shouldRefreshToken } from 'utils/helpers';
import { API, ApiActionPayload } from "api/types";
import type {RootState} from "redux/store";
import AuthActions from 'redux/auth/enum';

export const apiMiddleware: Middleware<{}, RootState> = store => next => async action => {
  next(action);
  if (action.type !== API) return;

  const { apiEndpoint, data, label, onSuccess, onFailure, } = action.payload as ApiActionPayload;

  let response;

  try {
    response = (data ? await apiEndpoint(data) : await apiEndpoint()) as AxiosResponse
    store.dispatch({type: label, payload: response.data ?? undefined});
    if(label === AuthActions.AUTH_LOGIN) saveToken(response.data)
    if(onSuccess) store.dispatch(onSuccess(undefined))
  } catch (e: any) {
    const error = e as AxiosError
    console.log(error.response?.data)
    if(onFailure) store.dispatch(onFailure(error.response?.data?.errors ?? {message: error.response?.data?.message}))
    if(shouldIntercept(error)) deleteToken()
    if(shouldRefreshToken(error)) {console.log("ok")}
    next(action)
  } 
}

export default apiMiddleware;
