import { ApiResourceID } from "redux/api/types";
import { AppThunkAction } from "redux/store";
import { LoadingStatus } from "redux/api/enum";
import { apiEnd, apiError, apiStart } from "redux/api/actions";
import {
  addFollowing,
  getNotifications,
  getProfile,
  markNotificationAsRead,
  updateProfile,
} from "./actions";
import { UserUpdatePayload } from "./types";

export const getProfileAsync =
  (): AppThunkAction => async (dispatch, _getState, api) => {
    dispatch(apiStart(LoadingStatus.LOADING_USER));
    try {
      const user = (await api.user.profile()).data;
      dispatch(getProfile(user));
    } catch (e: any) {
      const { data: errors } = e.response;
      dispatch(apiError(errors));
    } finally {
      dispatch(apiEnd());
    }
  };

export const updateProfileAsync =
  (user: UserUpdatePayload): AppThunkAction =>
  async (dispatch, _getState, api) => {
    dispatch(apiStart(LoadingStatus.LOADING_USER));
    try {
      const updatedUser = (await api.user.updateProfile(user)).data;
      dispatch(updateProfile(updatedUser));
    } catch (e: any) {
      const { data: errors } = e.response;
      dispatch(apiError(errors));
    } finally {
      dispatch(apiEnd());
    }
  };

export const getNotificationsAsync =
  (): AppThunkAction => async (dispatch, _getState, api) => {
    dispatch(apiStart(LoadingStatus.LOADING_USER));
    try {
      const notifications = (await api.user.notifications()).data;
      dispatch(getNotifications(notifications));
    } catch (e: any) {
      const { data: errors } = e.response;
      dispatch(apiError(errors));
    } finally {
      dispatch(apiEnd());
    }
  };

export const markNotificationAsReadAsync =
  (id: ApiResourceID): AppThunkAction =>
  async (dispatch, _getState, api) => {
    dispatch(apiStart(LoadingStatus.LOADING_NOTIFICATIONS));
    try {
      const notification = (await api.user.readNotification(id)).data;
      dispatch(markNotificationAsRead(notification.id));
    } catch (e: any) {
      const { data: errors } = e.response;
      dispatch(apiError(errors));
    } finally {
      dispatch(apiEnd());
    }
  };

export const followAsync =
  (id: ApiResourceID): AppThunkAction =>
  async (dispatch, _getState, api) => {
    dispatch(apiStart(LoadingStatus.LOADING_NOTIFICATIONS));
    try {
      const following = (await api.user.follow(id)).data;
      dispatch(addFollowing(following));
    } catch (e: any) {
      const { data: errors } = e.response;
      dispatch(apiError(errors));
    } finally {
      dispatch(apiEnd());
    }
  };
