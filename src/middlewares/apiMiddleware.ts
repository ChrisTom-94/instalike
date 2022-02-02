import { AxiosResponse } from 'axios';
import { Middleware } from "redux";
import { deleteToken, shouldIntercept, shouldRefreshToken } from 'utils/helpers';
import { apiStart, apiEnd, apiError, accessDenied } from "api/actions";
import { API } from "api/types";
import type {RootState} from "redux/store";
import { refreshToken } from 'redux/auth/actions';

export const apiMiddleware: Middleware<{}, RootState> = store => next => async action => {
  console.log(action)
  next(action);
  if (action.type !== API) return;

  const { apiEndpoint, data, onSuccess, label } = action.payload;

  if (label) {
    store.dispatch(apiStart(label));
  }

  try {
    const response = (data ? await apiEndpoint(data) : await apiEndpoint()) as AxiosResponse
    store.dispatch({type: label, payload: response.data ?? undefined});
    if(response.data) store.dispatch(onSuccess(response.data))
    else store.dispatch(onSuccess())
  } catch (error: any) {
    store.dispatch(apiError(error));
    if(shouldIntercept(error)){
      deleteToken()
      accessDenied(window.location.pathname)
    }
    if(shouldRefreshToken(error)) {
      store.dispatch(refreshToken())
      next(action)
    }
  } finally{
    if (label) {
      store.dispatch(apiEnd(label));
    }
  }
}

export default apiMiddleware;
