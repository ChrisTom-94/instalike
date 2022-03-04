import { apiError, apiEnd } from "redux/api/actions";
import { saveToken } from "utils/helpers";
import type { AppThunkAction } from "redux/store";
import { login, apiStart } from "./actions";
import type { ApiCredentials } from "./types";
import { ApiActions, LoadingStatus } from "./enum";

export const loginAsync =
  (credentials: ApiCredentials): AppThunkAction =>
  async (dispatch, _getState, api) => {
    dispatch(apiStart(LoadingStatus.LOADING_USER));
    try {
      const token = (await api.auth.login(credentials)).data;
      saveToken(token);
      dispatch(login());
    } catch (e: any) {
      const { data: errors } = e.response;
      dispatch(apiError(errors));
    } finally {
      dispatch(apiEnd());
    }
  };

export const logoutAsync =
  (): AppThunkAction => async (dispatch, _getState, api) => {
    dispatch(apiStart(LoadingStatus.LOADING_USER));
    try {
      await api.auth.logout();
      dispatch({ type: ApiActions.LOGOUT });
    } catch (e: any) {
      const { data: errors } = e.response;
      dispatch(apiError(errors));
    } finally {
      dispatch(apiEnd());
    }
  };
