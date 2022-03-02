import { ApiAction, ResourceID } from "redux/api/types";
import apiAction from "redux/api/actions";
import apiClient from "redux/api/api";
import { UserActions } from "./enum";

export const getProfileRequest = (): ApiAction =>
  apiAction({
    apiEndpoint: apiClient.user.profile,
    data: null,
    label: UserActions.GET_PROFILE_REQUEST,
  });

export const getNotificationsRequest = (): ApiAction =>
  apiAction({
    apiEndpoint: apiClient.user.notifications,
    data: null,
    label: UserActions.GET_NOTIFICATIONS_REQUEST,
  });

export const markNotificationAsReadRequest = (id: ResourceID): ApiAction =>
  apiAction({
    apiEndpoint: apiClient.user.readNotification,
    data: id,
    label: UserActions.MARK_NOTIFICATION_AS_READ_REQUEST,
  });

export const followRequest = (id: ResourceID): ApiAction => apiAction({
  apiEndpoint: apiClient.user.follow,
  data: id,
  label: UserActions.MARK_NOTIFICATION_AS_READ_REQUEST,
}) 

export const unfollowRequest = (id: ResourceID): ApiAction => apiAction({
  apiEndpoint: apiClient.user.unfollow,
  data: id,
  label: UserActions.MARK_NOTIFICATION_AS_READ_REQUEST,
}) 
