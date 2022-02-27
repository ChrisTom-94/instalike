import { ApiAction, ResourceID } from "api/types";
import apiAction from "api/actions";
import apiClient from "api/api";
import {
  getNotificationsSuccess,
  getProfileSuccess,
  getProfileError,
  getNotificationsError,
  markNotificationAsReadSuccess,
  markNotificationAsReadError,
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

export const markNotificationAsReadRequest = (id: ResourceID): ApiAction =>
  apiAction({
    apiEndpoint: apiClient.user.readNotification,
    data: id,
    onSuccess: markNotificationAsReadSuccess,
    onFailure: markNotificationAsReadError,
    label: UserActions.MARK_NOTIFICATION_AS_READ_REQUEST,
  });
