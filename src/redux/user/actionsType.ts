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

export interface GetFollowSuggestions
  extends Action<typeof UserActions.GET_FOLLOW_SUGGESTIONS> {
  payload: Instalike.User[];
}

export interface GetFollowing extends Action<typeof UserActions.GET_FOLLOWING> {
  payload: Instalike.User[];
}

export interface AddFollowing extends Action<typeof UserActions.ADD_FOLLOWING> {
  payload: Instalike.User;
}

export interface RemoveFollowing extends Action<typeof UserActions.REMOVE_FOLLOWING> {
  payload: Instalike.User;
}

export interface GetNotifications extends Action<typeof UserActions.GET_NOTIFICATIONS> {
  payload: Instalike.Notification[];
}

export interface MarkAllNotificationsAsRead
  extends Action<typeof UserActions.MARK_ALL_NOTIFICATIONS_AS_READ> {
  payload: undefined;
}

export interface ReadNotification extends Action<typeof UserActions.READ_NOTIFICATION> {
  payload: Instalike.Notification;
}

export interface UnreadNotification
  extends Action<typeof UserActions.UNREAD_NOTIFICATION> {
  payload: Instalike.Notification;
}
