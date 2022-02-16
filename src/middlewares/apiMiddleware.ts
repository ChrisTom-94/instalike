import { AxiosResponse } from 'axios';
import { Middleware } from "redux";
import { deleteToken, shouldIntercept, shouldRefreshToken } from 'utils/helpers';
import { apiStart, apiEnd, apiError, accessDenied } from "api/actions";
import { API, ApiActionPayload } from "api/types";
import type {RootState} from "redux/store";

export const apiMiddleware: Middleware<{}, RootState> = store => next => async action => {
  next(action);
  if (action.type !== API) return;

  const { apiEndpoint, data, onSuccessAction, onFailureAction, label } = action.payload as ApiActionPayload;

  if (label) {
    store.dispatch(apiStart(label));
  }

  try {
    const response = (data ? await apiEndpoint(data) : await apiEndpoint()) as AxiosResponse
    store.dispatch({type: label, payload: response.data ?? undefined});
    if(onSuccessAction) store.dispatch(onSuccessAction(undefined))
  } catch (error: any) {
    store.dispatch(apiError(error));
    if(onFailureAction) store.dispatch(onFailureAction(error))
    if(shouldIntercept(error)){
      deleteToken()
      accessDenied(window.location.pathname)
    }
    if(shouldRefreshToken(error)) {
      // store.dispatch(refreshToken())
      next(action)
    }
  } finally{
    if (label) {
      store.dispatch(apiEnd(label));
    }
  }
}

export default apiMiddleware;