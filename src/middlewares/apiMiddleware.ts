import { AxiosResponse, AxiosError } from 'axios';
import { Middleware } from "redux";
import { saveToken} from 'utils/helpers';
import { API, ApiActionPayload } from "api/types";
import type {RootState} from "redux/store";
import AuthActions from 'redux/auth/enum';

export const apiMiddleware: Middleware<{}, RootState> = store => next => async action => {
  next(action);
  if (action.type !== API) return;

  const { apiEndpoint, data, label, onSuccess, onFailure, } = action.payload as ApiActionPayload;

  try{
    const response = (data ? await apiEndpoint(data) : await apiEndpoint()) as AxiosResponse
    store.dispatch(onSuccess(response.data ?? undefined))
    if(label === AuthActions.AUTH_LOGIN_SUCCESS || label === AuthActions.AUTH_REFRESH_TOKEN_SUCCESS) saveToken(response.data)
  }catch(e: any){
    const error = e as AxiosError
    const {response} = error;
    if(!response) {
      // Network error
      store.dispatch(onFailure({message: error.message}))
      return
    }
    const {errors = null, message = null} = response.data
    // if(status === 401) store.dispatch()
    // if(status === 403) store.dispatch()
    if(errors) store.dispatch(onFailure({errors}))
    else store.dispatch(onFailure({message}))
  }

  // try {
  //   const response = (data ? await apiEndpoint(data) : await apiEndpoint()) as AxiosResponse
  //   store.dispatch({type: label, payload: response.data ?? undefined});
  //   if(label === AuthActions.AUTH_LOGIN_REQUEST) saveToken(response.data)
  //   if(onSuccess) store.dispatch(onSuccess(response.data ?? undefined))
  // } catch (e: any) {
  //   const error = e as AxiosError
  //   if(onFailure) store.dispatch(onFailure(error.response?.data?.errors ?? {message: error.response?.data?.message}))
  //   if(shouldIntercept(error)) deleteToken()
  //   if(shouldRefreshToken(error)) {console.log("ok")}
  //   next(action)
  // } 
}

export default apiMiddleware;
