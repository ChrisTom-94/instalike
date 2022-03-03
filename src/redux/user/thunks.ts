import apiClient from "redux/api/api";
import { ApiResourceID } from "redux/api/types";
import { UserActions } from "./enum";

export const getProfileRequest = ()  => ({
    apiEndpoint: apiClient.user.profile,
    data: null,
    label: UserActions.GET_PROFILE_REQUEST,
  });

export const getNotificationsRequest = () => ({
    apiEndpoint: apiClient.user.notifications,
    data: null,
    label: UserActions.GET_NOTIFICATIONS_REQUEST,
  });

export const markNotificationAsReadRequest = (id: ApiResourceID) =>({
    apiEndpoint: apiClient.user.readNotification,
    data: id,
    label: UserActions.MARK_NOTIFICATION_AS_READ_REQUEST,
  });

export const followRequest = (id: ApiResourceID) => ({
  apiEndpoint: apiClient.user.follow,
  data: id,
  label: UserActions.MARK_NOTIFICATION_AS_READ_REQUEST,
}) 

export const unfollowRequest = (id: ApiResourceID) => ({
  apiEndpoint: apiClient.user.unfollow,
  data: id,
  label: UserActions.MARK_NOTIFICATION_AS_READ_REQUEST,
}) 
