import { ResourceID } from 'api/types';
import { Action } from "redux";
import UserActions from "./enum";

export interface GetProfileAction extends Action<typeof UserActions.GET_PROFILE> {
  payload: Instalike.User;
}

export interface UpdateProfileAction extends Action<typeof UserActions.UPDATE_PROFILE> {
  payload: Instalike.User;
}

export interface UpdateAvatarAction extends Action<typeof UserActions.UPDATE_AVATAR> {
  payload: Instalike.User;
}

export interface DeleteAvatarAction extends Action<typeof UserActions.DELETE_AVATAR> {
  payload: undefined;
}

export interface GetFollowSuggestionsAction
  extends Action<typeof UserActions.GET_FOLLOW_SUGGESTIONS> {
  payload: Instalike.UserPreview[];
}

export interface GetFollowingAction extends Action<typeof UserActions.GET_FOLLOWING> {
  payload: Instalike.UserPreview[];
}

export interface AddFollowingAction extends Action<typeof UserActions.ADD_FOLLOWING> {
  payload: Instalike.UserPreview;
}

export interface DeleteFollowingAction extends Action<typeof UserActions.DELETE_FOLLOWING> {
  payload: ResourceID;
}

export interface GetNotificationsAction extends Action<typeof UserActions.GET_NOTIFICATIONS> {
  payload: Instalike.Notification[];
}

export interface UpdateAllNotificationsAsReadAction
  extends Action<typeof UserActions.UPDATE_ALL_NOTIFICATIONS_AS_READ> {
  payload: undefined;
}

export interface UpdateNotificationAsReadAction extends Action<typeof UserActions.UPDATE_NOTIFICATION_AS_READ> {
  payload: Instalike.Notification;
}

export interface UpdateNotificationAsUnreadAction
  extends Action<typeof UserActions.UPDATE_NOTIFICATION_AS_UNREAD> {
  payload: Instalike.Notification;
}
