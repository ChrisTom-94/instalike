import { ResourceID } from 'api/types';
import { Action } from "redux";
import UserActions from "./enum";

export interface UserRequestErrorAction extends Action<typeof UserActions.USER_REQUEST_ERROR> {
  errors: any;
}

export interface GetProfileSuccessAction extends Action<typeof UserActions.GET_PROFILE_SUCCESS> {
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

export interface GetNotificationsSuccessAction extends Action<typeof UserActions.GET_NOTIFICATIONS_SUCCESS> {
  payload: Instalike.Notification[];
}

export interface MarkNotificationAsReadSuccessAction extends Action<typeof UserActions.MARK_NOTIFICATION_AS_READ_SUCCESS> {
  payload: ResourceID;
}

export interface MarkNotificationAsUnreadSuccessAction
  extends Action<typeof UserActions.MARK_NOTIFICATION_AS_UNREAD_SUCCESS> {
  payload: ResourceID;
}
