import { ApiResourceID } from "redux/api/types";
import { AppThunkAction } from "redux/store";
import { LoadingStatus } from "redux/api/enum";
import { apiEnd, apiError, apiStart } from "redux/api/actions";
import { localStoregeUsersConnected } from "utils/helpers";
import {
  addFollowing,
  deleteFollowing,
  getFollowers,
  getFollowing,
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
      localStoregeUsersConnected(user);
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

  export const updateAvatarAsync =
  (formData: FormData): AppThunkAction =>
  async (dispatch, _getState, api) => {
    dispatch(apiStart(LoadingStatus.LOADING_USER));
    try {
      const updatedUser = (await api.user.updateAvatar(formData)).data;
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

  export const unfollowAsync =
  (id: ApiResourceID): AppThunkAction =>
  async (dispatch, _getState, api) => {
    dispatch(apiStart(LoadingStatus.LOADING_NOTIFICATIONS));
    try {
      await api.user.unfollow(id)
      dispatch(deleteFollowing(id));
    } catch (e: any) {
      const { data: errors } = e.response;
      dispatch(apiError(errors));
    } finally {
      dispatch(apiEnd());
    }
  };

export const getFollowingAsync =
  (): AppThunkAction => async (dispatch, _getState, api) => {
    dispatch(apiStart(LoadingStatus.LOADING_USER));
    try {
      const following = (await api.user.following()).data;
      dispatch(getFollowing(following));
    } catch (e: any) {
      const { data: errors } = e.response;
      dispatch(apiError(errors));
    } finally {
      dispatch(apiEnd());
    }
  };

export const getFollowersAsync =
  (): AppThunkAction => async (dispatch, _getState, api) => {
    dispatch(apiStart(LoadingStatus.LOADING_USER));
    try {
      const followers = (await api.user.followers()).data;
      dispatch(getFollowers(followers));
    } catch (e: any) {
      const { data: errors } = e.response;
      dispatch(apiError(errors));
    } finally {
      dispatch(apiEnd());
    }
  };
