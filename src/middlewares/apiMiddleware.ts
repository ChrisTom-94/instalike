import { deleteToken, saveToken } from 'utils/helpers';
import AuthActions from 'redux/auth/enum';
import { AxiosError } from 'axios';
import { Middleware } from "redux";
import { API } from "api/types";
import type {RootState} from "redux/store";

export const apiMiddleware: Middleware<{}, RootState> = ({dispatch}) => next => async action => {
  next(action);
  if (action.type !== API) return;

  const {apiEndpoint, data, onSuccess, onFailure, label} = action.payload;

  dispatch({type: label,  payload: undefined})

  try{
    const response = (data ? await apiEndpoint(data) : await apiEndpoint())
    dispatch(onSuccess(response.data ?? undefined))
    if(AuthActions.AUTH_LOGIN_REQUEST === label) saveToken(response.data)
    if(AuthActions.AUTH_LOGOUT_REQUEST === label) deleteToken()
  }catch(error: any){
    const {response} = error as AxiosError

    if(!response) {
      // Network error
      dispatch(onFailure({message: error.message}))
      return
    }

    // const {status} = response
    // if(status === 401){
    //   await apiClient.auth.refreshToken()
    //   .then(({data: token}) => {
    //     saveToken(token)
    //     store.dispatch(action)
    //   })
    //   return
    // }

    const {message, errors = null, } = response.data
    if(errors) dispatch(onFailure(errors))
    else dispatch(onFailure({message}))
  }
}

export default apiMiddleware;
