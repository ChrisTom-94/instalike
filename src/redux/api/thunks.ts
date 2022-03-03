import { saveToken } from 'utils/helpers';
import type { AppThunkAction } from 'redux/store';
import type { ApiCredentials } from "./types";
import {ApiActions, LoadingStatus} from "./enum";

export const loginAsync = (credentials: ApiCredentials): AppThunkAction => 
    async (dispatch, _getState, api) => {
        dispatch({type: ApiActions.REQUEST_START, payload: LoadingStatus.LOADING_USER})
        try{
            const token = (await api.auth.login(credentials)).data
            saveToken(token)
            dispatch({type: ApiActions.LOGIN})
        }catch(e: any){
            const {data: errors} = e.response
            dispatch({type: ApiActions.REQUEST_ERROR, payload: errors})
        }finally{
            dispatch({type: ApiActions.REQUEST_END})
        }
    }

export const logoutAsync = (): AppThunkAction => 
async (dispatch, _getState, api) => {
    dispatch({type: ApiActions.REQUEST_START})
    try{
        await api.auth.logout()
        dispatch({type: ApiActions.LOGOUT})
    }catch(e: any){
        const {data: errors} = e.response
        dispatch({type: ApiActions.REQUEST_ERROR, payload: errors})
    }finally{
        dispatch({type: ApiActions.REQUEST_END})
    }
}

