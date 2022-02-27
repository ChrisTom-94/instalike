import { AxiosResponse, AxiosError } from 'axios';
import { Middleware } from "redux";
import { API, ApiActionPayload } from "api/types";
import type {RootState} from "redux/store";


export const apiMiddleware: Middleware<{}, RootState> = store => next => async action => {
  next(action);
  if (action.type !== API) return;

  const { apiEndpoint, data, onSuccess, onFailure, label} = action.payload as ApiActionPayload;

  store.dispatch({type: label,  payload: undefined})

  try{
    const response = (data ? await apiEndpoint(data) : await apiEndpoint()) as AxiosResponse
    store.dispatch(onSuccess(response.data ?? undefined))
  }catch(error: any){
    const {response} = error as AxiosError

    if(!response) {
      // Network error
      store.dispatch(onFailure({message: error.message}))
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
    if(errors) store.dispatch(onFailure(errors))
    else store.dispatch(onFailure({message}))
  }
}

export default apiMiddleware;
