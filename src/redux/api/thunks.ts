import { AppThunkAction } from 'redux/store';
import apiClient from "redux/api/api";
import apiAction from "./actions";
import {ApiActions} from "./enum";
import { ApiAction, ApiCredentials } from "./types";

export const loginAsync = (credentials: ApiCredentials): AppThunkAction => 
    async (dispatch, _getState, api) => {
        dispatch({type: ApiActions.REQUEST_START})
        try{
            const token = (await api.auth.login(credentials)).data
            console.log(token)
        }finally{
            dispatch({type: ApiActions.REQUEST_END})
        }
    }

export const logoutAsync = (): ApiAction => apiAction({
    apiEndpoint: apiClient.auth.logout,
    data: null,
    label: ApiActions.LOGOUT
})

