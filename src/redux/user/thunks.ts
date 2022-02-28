import { ApiAction, ApiResourceId } from "api/types";
import apiAction from "api/actions";
import apiClient from "api/api";
import {
  getNotificationsSuccess,
  getProfileSuccess,
  getProfileError,
  getNotificationsError,
  markNotificationAsReadSuccess,
  markNotificationAsReadError,
  addFollowingError,
  addFollowingSuccess,
} from "./actions";
import { UserActions } from "./enum";

export const getProfileRequest = (): ApiAction =>
  apiAction({
    apiEndpoint: apiClient.user.profile,
    data: null,
    onSuccess: getProfileSuccess,
    onFailure: getProfileError,
    label: UserActions.GET_PROFILE_REQUEST,
  });

export const getNotificationsRequest = (): ApiAction =>
  apiAction({
    apiEndpoint: apiClient.user.notifications,
    data: null,
    onSuccess: getNotificationsSuccess,
    onFailure: getNotificationsError,
    label: UserActions.GET_NOTIFICATIONS_REQUEST,
  });

export const markNotificationAsReadRequest = (id: ApiResourceId): ApiAction =>
  apiAction({
    apiEndpoint: apiClient.user.readNotification,
    data: id,
    onSuccess: markNotificationAsReadSuccess,
    onFailure: markNotificationAsReadError,
    label: UserActions.MARK_NOTIFICATION_AS_READ_REQUEST,
  });

export const followRequest = (id: ApiResourceId): ApiAction => apiAction({
  apiEndpoint: apiClient.user.follow,
  data: id,
  onSuccess: addFollowingSuccess,
  onFailure: addFollowingError,
  label: UserActions.MARK_NOTIFICATION_AS_READ_REQUEST,
}) 

export const unfollowRequest = (id: ApiResourceId): ApiAction => apiAction({
  apiEndpoint: apiClient.user.unfollow,
  data: id,
  onSuccess: addFollowingSuccess,
  onFailure: addFollowingError,
  label: UserActions.MARK_NOTIFICATION_AS_READ_REQUEST,
}) 
